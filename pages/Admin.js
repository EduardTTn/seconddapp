import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Container, Form, Message} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from "../components/snackbar";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            institutionname: '',
            institutionaddress: '',
            companyname: '',
            companyaddress: '',
            errorMessage1: '',
            errorMessage2: '',
            accounts: []

        };
    }
    ;

    //handle methods are changing the states and prevent the default behaviour
    handleAddCompanyName = event => {
        event.preventDefault();
        this.setState({companyname: event.target.value});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
    };

    handleAddCompanyAddress = event => {
        event.preventDefault();
        this.setState({companyaddress: event.target.value});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
    };

    handleAddInstitutionName = event => {
        event.preventDefault();
        this.setState({institutionname: event.target.value});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
    };

    handleAddInstitutionAddress = event => {
        event.preventDefault();
        this.setState({institutionaddress: event.target.value});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
    };

    //once the function is called and no errors are present, it will submit a request to the contract to call the addCompany function of the contract
    onSubmit1 = async event => {
        event.preventDefault();
        this.setState({loading: true});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
        this.setState({loading: true, errorMessage: ''});
        try {
            this.setState({accounts: await web3.eth.getAccounts()});
            await instance.methods.addCompany(this.state.companyaddress, this.state.companyname).send({
                from: this.state.accounts[0]
            })

        } catch (err) {
            this.setState({loading: false});
            if (this.state.companyname === '' || this.state.companyaddress === '') {
                this.setState({errorMessage1: "Fields can't be empty"});
            } else if (err.message.includes('invalid address'))
                this.setState({errorMessage1: 'invalid address'});
        }
        this.setState({loading: false});
    };

    //once the function is called and no errors are present, it will submit a request to the contract to call the addInstitution function of the contract
    onSubmit2 = async event => {
        event.preventDefault();
        this.setState({loading: true});
        this.setState({errorMessage1: ''});
        this.setState({errorMessage2: ''});
        try {
            this.setState({accounts: await web3.eth.getAccounts()});
            await instance.methods.addInstitution(this.state.institutionaddress, this.state.institutionname).send({
                from: this.state.accounts[0]
            })
        } catch (err) {
            this.setState({loading: false});
            if (this.state.institutionname === '' || this.state.institutionaddress === '') {
                this.setState({errorMessage2: "Fields can't be empty"});
            } else if (err.message.includes('invalid address'))
                this.setState({errorMessage2: 'invalid address'});
        }
        this.setState({loading: false});
    };

    render() {
        let cardStyle = {
            width: '23%',
            margin: '100px auto'
        };

        let labelStyle = {
            margin: '10px',
            textAlign: 'center'
        };

        let formstyle = {
            opacity: '100%'
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
          font-family: 'Arial';
        }
        Card {
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
           }
        body {
         background: url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
         background-repeat: no-repeat;
         background-position: center; 
         background-attachment: fixed;
        }
      `}</style>
                </Head>
                <Container> ...</Container>
                <Card style={cardStyle}>
                    <label style={labelStyle}><h2>Add a Company</h2></label>
                    <Form className={"form-inline"} onSubmit={this.onSubmit1}
                          error={!!this.state.errorMessage1} style={formstyle}>
                        <Message error header={"Notice:"} content={this.state.errorMessage1}/>
                        <Form.Group inline style={{width: '100%', margin: '30px auto'}}>
                            <Form.Field required style={{width: '100%', margin: '10px'}}>
                                <Form.Input required fluid label="Company Name:"
                                            style={{width: '100%'}}
                                            value={this.state.companyname}
                                            onChange={this.handleAddCompanyName}
                                            error={!!this.state.errorMessage1}
                                />
                                <Form.Input required fluid label="Company Address:"
                                            style={{width: '96.555%'}}
                                            value={this.state.companyaddress}
                                            onChange={this.handleAddCompanyAddress}
                                            error={!!this.state.errorMessage1}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field style={{textAlign: 'center', margin: '10%'}}>
                            <Button style={{width: '30%', height: '50px'}} onClick={this.onSubmit1} color={"blue"}
                                    disabled={this.state.loading}>
                                Submit
                            </Button>
                        </Form.Field>
                    </Form>
                </Card>
                <Card color="blue" style={cardStyle}>
                    <label style={labelStyle}><h2>Add an Institution</h2></label>
                    <Form className={"form-inline"} onSubmit={this.onSubmit1}
                          error={!!this.state.errorMessage2} style={formstyle}>
                        <Message error header={"Notice:"} content={this.state.errorMessage2}/>
                        <Form.Group inline style={{width: '100%', margin: '30px auto'}}>
                            <Form.Field required style={{width: '100%', margin: '10px'}}>
                                <Form.Input required fluid label="Institution Name:"
                                            style={{width: '100%'}}
                                            value={this.state.institutionname}
                                            onChange={this.handleAddInstitutionName}
                                            error={!!this.state.errorMessage2}
                                />
                                <Form.Input required fluid label="Institution Address:"
                                            style={{width: '96.555%'}}
                                            value={this.state.institutionaddress}
                                            onChange={this.handleAddInstitutionAddress}
                                            error={!!this.state.errorMessage2}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field style={{textAlign: 'center', margin: '10%'}}>
                            <Button style={{width: '30%', height: '50px'}} onClick={this.onSubmit2} color={"blue"}
                                    disabled={this.state.loading}>
                                Submit
                            </Button>
                        </Form.Field>
                    </Form>
                </Card>
                {/*if an operation started the state will change to true and the snackbar will appear */}
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default Admin;
