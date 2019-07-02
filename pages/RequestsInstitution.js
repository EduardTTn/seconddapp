import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Container, Form, Icon, Message, Segment, Table} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from '../components/snackbar.js'

class RequestsInstitution extends Component {

    constructor(props) {
        super(props);
        this.state = {
            institutionz: [],
            accounts: [],
            loading: false
        };
    }

    componentDidMount() {
        this.loadBlockchainData()
    }

    //loads the data from the blockchain before the page is fired and executes the following functions from the contract: getJobRequestCount, getJobRequest
    async loadBlockchainData() {
        this.setState({accounts: await web3.eth.getAccounts()});
        this.setState({accounts: await web3.eth.getAccounts()});
        const x = await instance.methods.getCertRequestCount(this.state.accounts[0]).call();
        try {
            for (let i = 0; i < x; i++) {
                let z = await instance.methods.getCertRequest(this.state.accounts[0], i).call();
                if (z[5] === false) {
                    this.setState({institutionz: [...this.state.institutionz, z]});
                }
            }
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
    }

    //renders the certificates requests of an institution in table rows
    renderCertRequests() {

        const x = this.state.accounts[0];
        let r = this.state.institutionz.map(function (cert, index) {

            return [<Table.Row>
                <Table.Cell key={x}>{cert[2].toString()}</Table.Cell>
                <Table.Cell key={x}>{cert[0].toString()}</Table.Cell>
                <Table.Cell key={x}>{cert[1].toString()}</Table.Cell>
                <Table.Cell key={x}>{cert[3].toString()}</Table.Cell>
                <Button disabled={this.state.loading} onClick={(e) => {
                    //calls the approveRequestCertificate function of the contract
                    e.preventDefault();
                    instance.methods.approveRequestCertificate(index).send({from: x});
                    this.setState({loading: true});
                }}><Icon color='black' name='check'/></Button>
                < Button disabled={load} onClick={(e) => {
                    //calls the denyRequestCertificate function of the contract
                    e.preventDefault();
                    instance.methods.denyRequestCertificate(index).send({from: x});
                    this.setState({loading: true});
                }}><Icon color='black' name='close'/></Button>

            </Table.Row>];
        });

        return r;
    }

    //renders the certificates requests in a table
    renderCertRequestsTables() {

        let tableStyle = {
            width: '45%',
            margin: '30px auto'
        };

        let cardStyle = {
            width: '35%',
            margin: '100px auto',
        };

        if (this.state.institutionz && this.state.institutionz.length) {
            return (<Table celled style={tableStyle} color={'blue'} key={'blue'} inverted>

                    <Table.Header>
                        <Segment inverted color="blue" style={{textalign: 'center'}}><h2>Requests</h2></Segment>
                        <Table.Row>
                            <Table.HeaderCell> ID</Table.HeaderCell>
                            <Table.HeaderCell>Graduation Year</Table.HeaderCell>
                            <Table.HeaderCell>Requester</Table.HeaderCell>
                            <Table.HeaderCell>Degree</Table.HeaderCell>
                            <Table.HeaderCell>Validate</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderCertRequests()}
                    </Table.Body>
                </Table>
            );
        } else return <div style={{margin: '10%'}}><Card style={cardStyle}><h2 style={{margin: '4%'}}>No Requests
            registered at the moment.</h2></Card></div>;
    }

    render() {
        console.log('address:', this.state.accounts[0]);
        console.log('company:', this.state.loading);
        return (
            <div>
                <div></div>

                <Head>
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                    <style>{`
        body {
         background: url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
         background-repeat: no-repeat;
         background-position: center; 
         background-attachment: fixed;
        }
         
        Card {
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
     
           }
          `}</style>
                </Head>

                <div style={{margin: '150px auto'}}>{this.renderCertRequestsTables()}</div>
                <!-- //if an operation started the state will change to true and the snackbar will appear -->
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default RequestsInstitution;