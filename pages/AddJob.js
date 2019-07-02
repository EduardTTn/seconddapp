import React, {Component} from 'react';
import Head from "next/head";
import {Button, Card, Form, Message} from "semantic-ui-react";
import FixedMenuLayout from "../components/footer";
import instance from "../components/verifier.js";
import web3 from '../components/web3.js';
import SimpleSnackbar from '../components/snackbar.js'


class AddJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            accounts: [],
            errorMessage: '',
            position: '',
            companyname: '',
            monthsworked: 0,
            SSN: 0,
            yearhired: 0,
            yearleft: 0
        };
    };

    //handle methods are changing the states and prevent the default behaviour
    handleAddCompanyName = event => {
        event.preventDefault();
        this.setState({companyname: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddMonths = event => {
        event.preventDefault();
        this.setState({monthsworked: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddPosition = event => {
        event.preventDefault();
        this.setState({position: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddHired = event => {
        event.preventDefault();
        this.setState({yearhired: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddLeft = event => {
        event.preventDefault();
        this.setState({yearleft: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddSSN = event => {
        event.preventDefault();
        this.setState({SSN: event.target.value});
        this.setState({errorMessage: ''});
    };

    //once the function is called and no errors are present, it will submit a request to the contract to call the addJob function of the contract
    onSubmit = async event => {
        if (this.state.companyname === '' || this.state.position === '' || this.state.monthsworked === 0 || this.state.SSN === 0 || this.state.yearhired === 0 || this.state.yearleft === 0) {
            this.setState({errorMessage: "Fields can't be empty"});
        } else if (this.state.SSN < 100000000 || this.state.day > 999999999) {
            this.setState({errorMessage: "Invalid SSN"});
        } else if (this.state.yearhired > this.state.yearleft) {
            this.setState({errorMessage: "Invalid Period"});
        } else if (this.state.errorMessage === '') {
            event.preventDefault();
            this.setState({loading: true});
            this.setState({accounts: await web3.eth.getAccounts()});
            await instance.methods.addJob(this.state.monthsworked, this.state.position, this.state.companyname, this.state.SSN, this.state.yearhired, this.state.yearleft).send({
                from: this.state.accounts[0]
            });
        }
    };

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
                    <Card style={cardStyle}><h4 style={{margin: '4%'}}>Add a job to your resume, once submited, the
                        company will validate it or deny it.</h4></Card>
                    <Card color="blue" style={cardStyle}>
                        <label style={labelStyle}><h2>Add Job </h2></label>
                        <Form className={"form-inline"} onSubmit={this.onSubmit}
                              error={!!this.state.errorMessage} style={formstyle}>
                            <Message error header={"Notice:"} content={this.state.errorMessage}/>
                            <Form.Group inline style={{width: '60%', margin: '30px auto'}}>
                                <Form.Field required style={{width: '90%', margin: '10px'}}>
                                    <Form.Input required fluid label="Position:"
                                                style={{width: '100%'}}
                                                value={this.state.position}
                                                onChange={this.handleAddPosition}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="Company:"
                                                style={{width: '96.555%'}}
                                                value={this.state.companyname}
                                                onChange={this.handleAddCompanyName}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="SSN:"
                                                style={{width: '80%'}}
                                                value={parseInt(this.state.SSN)}
                                                onChange={this.handleAddSSN}
                                                type="number"
                                                min={100000000} max={999999999} step={1}
                                    />
                                    <Form.Input required fluid label="Months worked:"
                                                style={{width: '100px'}}
                                                value={parseInt(this.state.monthsworked)}
                                                onChange={this.handleAddMonths}
                                                type="number"
                                                min={1} step={1}
                                    />
                                    <Form.Input required fluid label="Year hired:"
                                                style={{width: '100px'}}
                                                value={parseInt(this.state.yearhired)}
                                                onChange={this.handleAddHired}
                                                type="number"
                                                min={1970} max={2099}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input required fluid label="Year left:"
                                                style={{width: '100px'}}
                                                value={parseInt(this.state.yearleft)}
                                                onChange={this.handleAddLeft}
                                                type="number"
                                                min={1970} max={2099} step={1}
                                                error={!!this.state.errorMessage}
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

export default AddJob