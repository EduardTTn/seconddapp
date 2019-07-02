import React, {Component} from 'react';
import Head from "next/head";
import {Card, Segment, Table} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';

class ShowInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            accounts: [],
            jobs: [],
            certificates: [],
            info: null
        };
    }

    componentWillMount() {
        this.loadBlockchainData()
    }

    //calls the contract functions before the page is rendered(getBasicInfo, getJobCount, getJob )
    async loadBlockchainData() {
        this.setState({loading: await web3.eth.isMining()});
        this.setState({accounts: await web3.eth.getAccounts()});
        const x = await instance.methods.getBasicInfo(this.state.accounts[0]).call();
        this.setState({
            info: x
        });
        const y = await instance.methods.getJobCount(this.state.accounts[0]).call();
        for (let i = 0; i < y; i++) {
            const z = await instance.methods.getJob(this.state.accounts[0], i).call();
            this.setState({jobs: [...this.state.jobs, z]});
        }
        const z = await instance.methods.getCertificateCount(this.state.accounts[0]).call();
        for (let i = 0; i < z; i++) {
            const r = await instance.methods.getCertificate(this.state.accounts[0], i).call();
            this.setState({certificates: [...this.state.certificates, r]});
        }
    }

    //renders the certificates of an user in table rows
    renderCertificates() {
        const x = this.state.accounts[0];
        let y = 'Unknown';
        let r = this.state.certificates.map(function (certificate) {
            if (certificate[3] === false && certificate[4] === false) {
                y = 'Unknown'
            } else if (certificate[3] === true) {
                y = 'Approved'
            } else if (certificate[4] === true) {
                y = 'Denied'
            }
            return [<Table.Row positive={certificate[3]} negative={!certificate[3]}>
                <Table.Cell key={x}>{certificate[1].toString()}</Table.Cell>
                <Table.Cell key={x}>{certificate[0].toString()}</Table.Cell>
                <Table.Cell key={x}>{certificate[2].toString()}</Table.Cell>
                <Table.Cell>{y}</Table.Cell>
            </Table.Row>];
        });
        return r;
    }

    //renders the table of certificates
    renderCertificateTable() {
        let tableStyle = {
            width: '38%',
            margin: '30px auto'
        };

        if (this.state.certificates && this.state.certificates.length) {
            return (<Table celled style={tableStyle} color={'blue'} key={'blue'} inverted>
                    <Table.Header>
                        <Segment inverted color="blue" style={{textalign: 'center'}}><h2>Certificates</h2></Segment>
                        <Table.Row>
                            <Table.HeaderCell> Institution</Table.HeaderCell>
                            <Table.HeaderCell>Year </Table.HeaderCell>
                            <Table.HeaderCell>Degree</Table.HeaderCell>
                            <Table.HeaderCell>Validity</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderCertificates()}
                    </Table.Body>
                </Table>
            );
        } else return null;
    }

    //renders the jobs of an user in table rows
    renderJobs() {
        const x = this.state.accounts[0];
        let y = 'Unknown';
        let r = this.state.jobs.map(function (job) {
            if (job[3] === false && job[4] === false) {
                y = 'Unknown'
            } else if (job[3] === true) {
                y = 'Approved'
            } else if (job[4] === true) {
                y = 'Denied'
            }
            return [<Table.Row positive={job[3]} negative={!job[3]}>
                <Table.Cell key={x}>{job[1].toString()}</Table.Cell>
                <Table.Cell key={x}>{job[0].toString()}</Table.Cell>
                <Table.Cell key={x}>{job[2].toString()}</Table.Cell>
                <Table.Cell>{y}</Table.Cell>
            </Table.Row>];
        });
        return r;
    }

    //renders the table of jobs
    renderJobsTable() {

        let tableStyle = {
            width: '38%',
            margin: '30px auto'
        };
        if (this.state.jobs && this.state.jobs.length) {
            return (<Table celled style={tableStyle} color={'blue'} key={'blue'} inverted>

                    <Table.Header>
                        <Segment inverted color="blue" style={{textalign: 'center'}}><h2>Jobs</h2></Segment>
                        <Table.Row>
                            <Table.HeaderCell> Company</Table.HeaderCell>
                            <Table.HeaderCell>Period Worked</Table.HeaderCell>
                            <Table.HeaderCell>Position</Table.HeaderCell>
                            <Table.HeaderCell>Validity</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderJobs()}
                    </Table.Body>
                </Table>
            );
        } else return null;
    }

    render() {
        let cardStyle = {
            width: '15%',
            margin: '100px auto',
        };

        return (
            <div>
                <div>
                </div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                    <style>{`
        h1,
        a {
          font-family: 'Helvetica';
        }
        
        Card {
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
           background-color: #D9499A;
           }
         
        body {
         background: url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
         background-repeat: no-repeat;
         background-position: center; 
         background-attachment: fixed;
        }
      `}</style>
                </Head>
                {this.state.info === null ? null :
                    <Card color="blue" style={cardStyle}>
                        <Card.Content>
                            <div style={{margin: '2%'}}><h3 style={{margin: '1%'}}>Name:</h3> <h5
                                style={{margin: '1%'}}> {this.state.info[0].toString()}</h5></div>
                            <div style={{margin: '2%'}}><h3 style={{margin: '1%'}}>Date of birth:</h3> <h5
                                style={{margin: '1%'}}>{parseInt(this.state.info[1])}/{parseInt(this.state.info[2])}/{parseInt(this.state.info[3])} </h5>
                            </div>
                            <div style={{margin: '2%'}}><h3 style={{margin: '1%'}}>Location:</h3> <h5
                                style={{margin: '1%'}}> {this.state.info[4].toString()}</h5></div>
                            <div style={{margin: '2%'}}><h3 style={{margin: '1%'}}>E-mail:</h3> <h5
                                style={{margin: '1%'}}> {this.state.info[5].toString()}</h5></div>
                        </Card.Content>
                    </Card>}
                {this.renderJobsTable()}
                {this.renderCertificateTable()}
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default ShowInfo