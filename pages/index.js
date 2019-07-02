import React, {Component} from 'react';
import {Card, Container, Segment, Table, Form, Button, Icon, Message} from 'semantic-ui-react'
import Head from "next/head";
import FixedMenuLayout from "../components/footer";
import web3 from "../components/web3";
import instance from "../components/verifier";
import SimpleSnackbar from '../components/snackbar.js'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            addressform: true,
            accounts: [],
            jobs: [],
            certificates: [],
            info: '',
            address: '',
            email: ''

        };
    }

    componentWillMount() {
        this.loadBlockchainData()
    }

    //loads the accounts present in the metamask
    async loadBlockchainData() {
        this.setState({accounts: await web3.eth.getAccounts()});
    }

    //handle methods are changing the states and prevent the default behaviour
    handleChange = event => {
        event.preventDefault();
        this.setState({
            info: '',
            jobs: [],
            certificates: [],
            email: '',
            address: event.target.value,
            errorMessage: ''
        });

    };

    handleSecondChange = event => {
        event.preventDefault();
        this.setState({
            info: '',
            jobs: [],
            certificates: [],
            email: event.target.value,
            address: '',
            errorMessage: ''
        });

    };
    //when the email button is clicked, the searchbar changes in order to receive email input
    onEmailClick = event => {
        event.preventDefault();
        this.setState({
            info: '',
            jobs: [],
            certificates: [],
            addressform: false,
            address: '',
            email: '',
            errorMessage: ''
        });

    };

//when the address button is clicked, the searchbar changes in order to receive eth address input
    onAddressClick = event => {
        event.preventDefault();
        this.setState({
            info: '',
            jobs: [],
            certificates: [],
            addressform: true,
            address: '',
            email: '',
            errorMessage: ''
        });

    };
    //once called, the function calls the following functions of the contract (getBasicInfo, getBasicInfo, getJob, getCertificateCount, getCertificate) and displays the info on screen for email based search
    onSecondSubmit = async event => {

        try {
            event.preventDefault();
            this.setState({accounts: await web3.eth.getAccounts()});
            this.setState({loading: true, errorMessage: ''});
            const j = await instance.methods.getAddress(this.state.email).call();
            const x = await instance.methods.getBasicInfo(j).call();
            if (x === null) {
                this.setState({errorMessage: 'E-mail not registered'});
            } else {
                this.setState({
                    info: x
                });
            }
            const y = await instance.methods.getBasicInfo(j).call();
            for (let i = 0; i < y; i++) {
                const z = await instance.methods.getJob(j, i).call();
                this.setState({jobs: [...this.state.jobs, z]});
            }
            const z = await instance.methods.getCertificateCount(j).call();
            for (let i = 0; i < z; i++) {
                const r = await instance.methods.getCertificate(j, i).call();
                this.setState({certificates: [...this.state.certificates, r]});
            }
        } catch (err) {
            if (err.message.includes('User denied')) {
                this.setState({errorMessage: "Transaction Canceled"});
            }
            if (this.state.email === '')
                this.setState({errorMessage: 'Field is Empty'});

        }
    };

    //once called, the function calls the following functions of the contract (getBasicInfo, getBasicInfo, getJob, getCertificateCount, getCertificate) and displays the info on screen for address based search
    onSubmit = async event => {
        try {
            event.preventDefault();
            this.setState({accounts: await web3.eth.getAccounts()});
            this.setState({loading: true, errorMessage: ''});
            const x = await instance.methods.getBasicInfo(this.state.address).call();
            if (x === null) {
                this.setState({errorMessage: 'Address not registered'})
            } else {
                this.setState({
                    info: x
                });
            }
            const y = await instance.methods.getJobCount(this.state.address).call();
            for (let i = 0; i < y; i++) {
                const z = await instance.methods.getJob(this.state.address, i).call();
                this.setState({jobs: [...this.state.jobs, z]});
            }
            const z = await instance.methods.getCertificateCount(this.state.address).call();
            for (let i = 0; i < z; i++) {
                const r = await instance.methods.getCertificate(this.state.address, i).call();
                this.setState({certificates: [...this.state.certificates, r]});
            }
        } catch (err) {
            if (err.message.includes('User denied')) {
                this.setState({errorMessage: "Transaction Canceled"});
            }
            if (err.message.includes('invalid address'))
                this.setState({errorMessage: 'Invalid Address!'})
        }
    };

    //renders the certificates of an user in table rows
    renderCertificates() {
        const x = 'Certificates' + this.state.address;
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
                <Table.Cell key={x + '1'}>{certificate[1].toString()}</Table.Cell>
                <Table.Cell key={x + '2'}>{certificate[0].toString()}</Table.Cell>
                <Table.Cell key={x + '3'}>{certificate[2].toString()}</Table.Cell>
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

        console.log('certificate before:', this.state.certificates);
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
        const x = this.state.address;
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
                <Table.Cell key={x + 1}>{job[1].toString()}</Table.Cell>
                <Table.Cell key={x + 2}>{job[0].toString()}</Table.Cell>
                <Table.Cell key={x + 3}>{job[2].toString()}</Table.Cell>
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
        console.log('jobs before:', this.state.jobs);

        if (this.state.jobs.length !== 0) {
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
            display: 'block',
            width: '28%',
            margin: '7px auto',
            height: 'auto',
        };

        let formStyle = {
            width: '100%',
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
        body {
         background: url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
         background-repeat: no-repeat;
         background-position: center; 
         background-attachment: fixed;
        }
      `}</style>
                </Head>
                <Container>ed</Container>
                <div style={{margin: '6%'}}><Button primary disabled={!this.state.addressform}
                                                    onClick={this.onEmailClick}>Search by E-mail</Button><Button primary
                                                                                                                 disabled={this.state.addressform}
                                                                                                                 onClick={this.onAddressClick}>Search
                    by Address</Button></div>
                <Form className={"form-inline"} style={formStyle} onSubmit={this.onSubmit}
                      error={!!this.state.errorMessage}>
                    {this.state.addressform === true ?
                        <Form.Group inline style={{width: '60%', margin: '150px auto'}}>
                            <label style={{fontSize: 'x-large'}}>Search by Address:</label>
                            <Form.Field style={{width: '90%'}}>
                                <Form.Input placeholder="Ethereum address of user..."
                                            aria-placeholder={{color: 'blue'}}
                                            style={{width: '100%', height: '75px', fontSize: 'large',}}
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            error={!!this.state.errorMessage}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button onClick={this.onSubmit}
                                        color={"blue"}
                                        style={{width: '150px', height: '75px'}}>
                                    <Icon color='white' name='search'/>
                                </Button>
                            </Form.Field>
                        </Form.Group>
                        : null}
                    {this.state.addressform === false ?
                        <Form.Group inline style={{width: '60%', margin: '150px auto'}}>
                            <label style={{fontSize: 'x-large'}}>Search by E-mail:</label>
                            <Form.Field style={{width: '90%'}}>
                                <Form.Input placeholder="E-mail address of user..."
                                            aria-placeholder={{color: 'blue'}}
                                            style={{width: '100%', height: '75px', fontSize: 'large',}}
                                            value={this.state.email}
                                            onChange={this.handleSecondChange}
                                            error={!!this.state.errorMessage}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button onClick={this.onSecondSubmit}
                                        color={"blue"}
                                        style={{width: '150px', height: '75px'}}
                                >

                                    <Icon color='white' name='search'/>
                                </Button>
                            </Form.Field>
                        </Form.Group>
                        : null}
                    <Message style={{width: '15%', margin: '30px auto'}} error header={"Notice:"}
                             content={this.state.errorMessage}/>
                </Form>
                {this.state.info.length === 0 ? null :
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
                <div style={{margin: '4%'}}>
                    <div>{this.renderJobsTable()}</div>
                    <div>{this.renderCertificateTable()}</div>
                </div>
                {/*if an operation started the state will change to true and the snackbar will appear */}
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default Index;