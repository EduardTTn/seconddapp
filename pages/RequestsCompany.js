import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Icon, Segment, Table} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from '../components/snackbar.js';

class RequestsCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobz: [],
            isCompany: false,
            isInstitution: false,
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
        const x = await instance.methods.getJobRequestCount(this.state.accounts[0]).call();
        try {
            for (let i = 0; i < x; i++) {
                let z = await instance.methods.getJobRequest(this.state.accounts[0], i).call();
                if (z[5] === false) {
                    this.setState({jobz: [...this.state.jobz, z]});
                }
            }
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
    }

//renders the jobs requests of a company in table rows
    renderJobRequests() {
        let y = this.state.loading
        const x = this.state.accounts[0];
        let r = this.state.jobz.map(function (job, index) {
            return [<Table.Row>
                <Table.Cell key={x}>{job[2].toString()}</Table.Cell>
                <Table.Cell key={x}>{job[0].toString()}</Table.Cell>
                <Table.Cell key={x}>{job[1].toString()}</Table.Cell>
                <Table.Cell key={x}>{job[3].toString()}</Table.Cell>
                <Button onClick={(e) => {
                    e.preventDefault();
                    //calls the approveRequestJob function of the contract
                    instance.methods.approveRequestJob(index).send({from: x}).once('receipt', (receipt) => {
                    });
                }}><Icon color='black' name='check'/></Button>
                < Button onClick={(e) => {
                    e.preventDefault();
                    //calls the denyRequestJob function of the contract
                    instance.methods.denyRequestJob(index).send({from: x}).once('receipt', (receipt) => {

                    });
                }}><Icon color='black' name='close'/></Button>
            </Table.Row>];
        });
        return r;
    }

    //renders the jobs requests in a table
    renderJobRequestsTables() {
        let tableStyle = {
            width: '45%',
            margin: '30px auto'
        };

        let cardStyle = {
            width: '35%',
            margin: '100px auto',
        };

        if (this.state.jobz && this.state.jobz.length) {
            return (<Table celled style={tableStyle} color={'blue'} key={'blue'} inverted>
                    <Table.Header>
                        <Segment inverted color="blue" style={{textalign: 'center'}}><h2>Requests</h2></Segment>
                        <Table.Row>
                            <Table.HeaderCell> SSN</Table.HeaderCell>
                            <Table.HeaderCell>Months Worked</Table.HeaderCell>
                            <Table.HeaderCell>Position</Table.HeaderCell>
                            <Table.HeaderCell>Requester</Table.HeaderCell>
                            <Table.HeaderCell>Validate</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderJobRequests()}
                    </Table.Body>
                </Table>
            );
        } else return <div style={{margin: '10%'}}><Card style={cardStyle}><h2 style={{margin: '4%'}}>No Requests
            registered at the moment.</h2></Card></div>
    }

    render() {
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
      `}</style>
                </Head>
                <div style={{margin: '150px auto'}}>{this.renderJobRequestsTables()}</div>
                {/*if an operation started the state will change to true and the snackbar will appear */}
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default RequestsCompany;