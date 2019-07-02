import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Form, Message} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from '../components/snackbar.js'

class AddCertificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            accounts: [],
            institutionname: '',
            errorMessage: '',
            degree: '',
            year: 0,
            ID: '',


        };
    }
    ;

    //handle methods are changing the states and prevent the default behaviour
    handleAddInstitutionName = event => {
        event.preventDefault();
        this.setState({institutionname: event.target.value});
        this.setState({errorMessage: ''});

    };

    handleAddYear = event => {
        event.preventDefault();
        this.setState({year: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddDegree = event => {
        event.preventDefault();
        this.setState({degree: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddID = event => {
        event.preventDefault();
        this.setState({ID: event.target.value});
        this.setState({errorMessage: ''});
    };

    //once the function is called and no errors are present, it will submit a request to the contract to call the addCertificate function of the contract
    onSubmit = async event => {
        try {
            if (this.state.institutionname === '' || this.state.degree === '' || this.state.year === 0 || this.state.ID === '') {
                this.setState({errorMessage: "Fields can't be empty"});
            } else if (this.state.year < 1945 || this.state.day > 2099) {
                this.setState({errorMessage: "Invalid Year"});
            } else if (this.state.errorMessage === '') {
                event.preventDefault();
                this.setState({accounts: await web3.eth.getAccounts()});
                this.setState({loading: true, errorMessage: ''});
                await instance.methods.addCertificate(this.state.year, this.state.institutionname, this.state.degree, this.state.ID).send({
                    from: this.state.accounts[0]
                });

            }
        } catch (err) {
            if (err.message.includes('User denied')) {
                this.setState({errorMessage: "Transaction Canceled"});
            }
        }
    }


    render() {
        {
            let cardStyle = {
                width: '23%',
                margin: '100px auto',
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
                    <div></div>
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
                    <Card style={cardStyle}><h4 style={{margin: '4%'}}>Add a certificate to your resume, once submited,
                        the
                        company will validate it or deny it.</h4></Card>
                    <Card color="blue" style={cardStyle}>
                        <label style={labelStyle}><h2>Add Certificate </h2></label>
                        <Form className={"form-inline"} onSubmit={this.onSubmit}
                              error={!!this.state.errorMessage} style={formstyle}>
                            <Message error header={"Notice:"} content={this.state.errorMessage}/>
                            <Form.Group inline style={{width: '60%', margin: '30px auto'}}>
                                <Form.Field required style={{width: '90%', margin: '10px'}}>
                                    <Form.Input required fluid label="Institution:"
                                                style={{width: '100%'}}
                                                value={this.state.institutionname}
                                                onChange={this.handleAddInstitutionName}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="Degree:"
                                                style={{width: '96.555%'}}
                                                value={this.state.degree}
                                                onChange={this.handleAddDegree}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="ID:"
                                                style={{width: '80%'}}
                                                value={this.state.ID}
                                                onChange={this.handleAddID}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="Graduation year:"
                                                style={{width: '100px'}}
                                                value={parseInt(this.state.year)}
                                                onChange={this.handleAddYear}
                                                type="number"
                                                min={1945} max={2099} step={1}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field style={{textAlign: 'center', margin: '10%'}}>
                                <Button style={{width: '30%', height: '50px'}} onClick={this.onSubmit} color={"blue"}
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
}

export default AddCertificate;