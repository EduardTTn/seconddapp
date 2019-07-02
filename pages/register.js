import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Container, Form, Message} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from '../components/snackbar.js'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            errorMessage: '',
            name: '',
            day: 0,
            month: 0,
            year: 0,
            location: '',
            email: '',
            accounts: []
        };
    }

    //once the function is called and no errors are present, it will submit a request to the contract to call the register function of the contract
    onSubmit = async event => {
        try {
            if (this.state.name === '' || this.state.location === '' || this.state.day === 0 || this.state.month === 0 || this.state.year === 0 || this.state.email === '') {
                this.setState({errorMessage: "Fields can't be empty"});
            } else if (this.state.day > 31 || this.state.day < 1) {
                this.setState({errorMessage: "Invalid day"});
            } else if (this.state.month > 12 || this.state.month < 1) {
                this.setState({errorMessage: "Invalid month"});
            } else if (this.state.year < 1920 || this.state.year > 2001) {
                this.setState({errorMessage: "Invalid year"});
            } else if (this.state.errorMessage === '') {
                event.preventDefault();
                this.setState({accounts: await web3.eth.getAccounts()});
                this.setState({loading: true, errorMessage: ''});
                await instance.methods.registerUser(this.state.name, this.state.day, this.state.month, this.state.year, this.state.location, this.state.email).send({
                    from: this.state.accounts[0]
                });
            }
        }

        catch(err){
            if (err.message.includes('User denied')) {
                this.setState({errorMessage: "Transaction Canceled"});
            }        }
    };

    //handle methods are changing the states and prevent the default behaviour
    handleAddName = event => {
        event.preventDefault();
        this.setState({name: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddLocation = event => {
        event.preventDefault();
        this.setState({location: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddEmail = event => {
        event.preventDefault();
        this.setState({email: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddDay = event => {
        event.preventDefault();
        this.setState({day: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddMonth = event => {
        event.preventDefault();
        this.setState({month: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddYear = event => {
        event.preventDefault();
        this.setState({year: event.target.value});
        this.setState({errorMessage: ''});
    };

    render() {

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
                <Container> zz</Container>
                <Card color="blue" style={cardStyle}>
                    <label style={labelStyle}><h2>Register</h2></label>
                    <Form className={"form-inline"} onSubmit={this.onSubmit}
                          error={!!this.state.errorMessage} style={formstyle}>
                        <Message error header={"Notice:"} content={this.state.errorMessage}/>
                        <Form.Group inline style={{width: '60%', margin: '30px auto'}}>
                            <Form.Field required style={{width: '90%', margin: '10px'}}>
                                <Form.Input required fluid label="Name:"
                                            style={{width: '100%'}}
                                            value={this.state.name}
                                            onChange={this.handleAddName}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input required fluid label="Location:"
                                            style={{width: '96.555%'}}
                                            value={this.state.location}
                                            onChange={this.handleAddLocation}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input required fluid label="E-Mail:"
                                            style={{width: '96.555%'}}
                                            value={this.state.email}
                                            onChange={this.handleAddEmail}
                                            error={!!this.state.errorMessage}
                                />
                                <label style={{margin: '4%'}}> Date of Birth:</label>
                                <Form.Group inline widths="equal" style={{width: '21%'}}>
                                    <Form.Field style={{margin: '20%'}}>
                                        <Form.Input label="day:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.day)}
                                                    onChange={this.handleAddDay}
                                                    type="number"
                                                    min={1} max={31} step={1}
                                        />
                                        <Form.Input label="month:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.month)}
                                                    onChange={this.handleAddMonth}
                                                    type="number"
                                                    min={1} max={12} step={1}
                                        />
                                        <Form.Input label="year:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.year)}
                                                    onChange={this.handleAddYear}
                                                    type="number"
                                                    min={1920} max={2001} step={1}
                                        />
                                    </Form.Field>
                                </Form.Group>
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

export default Register;