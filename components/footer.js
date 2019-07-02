import React, {Component} from 'react'
import {
    Container,
    Divider,
    Image,
    Menu,
    Card,
    Dropdown,

} from 'semantic-ui-react'
import Link from "next/link";
import instance from "./verifier.js"
import web3 from "./web3.js"

class FixedMenuLayout extends Component {

    componentDidMount() {
        this.loadBlockchainData()
    }

    //loads the data from the blockchain in order to set the states
    async loadBlockchainData() {
        let accounts = await web3.eth.getAccounts();
        this.setState({isOwner: await instance.methods.checkIfOwner(accounts[0]).call()});
        this.setState({isUser: await instance.methods.isRegistered(accounts[0]).call()});
        this.setState({isCompany: await instance.methods.isCompany(accounts[0]).call()});
        this.setState({isInstitution: await instance.methods.isInstitution(accounts[0]).call()});
    }

    constructor(props) {
        super(props);
        this.state = {
            isOwner: false,
            isUser: false,
            isCompany: false,
            isInstitution: false
        };
    };

    render() {
        return (
            <div>
                <Menu pointing fixed='top'>
                    <Container textAlign='center'>
                        <Link href="/index">
                            <Menu.Item as='a' header>
                                <Image size='normal'
                                       src='https://img.icons8.com/ultraviolet/50/000000/parse-resumes.png'
                                       style={{marginLeft: '1.5em'}}/>
                                <h2 style={{margin: '5px'}}>Resume Verifier</h2>
                            </Menu.Item>
                        </Link>
                        {/* if the loaded address is a registered user the dropdown menu will appear */}
                        {this.state.isUser === true ?
                            <Dropdown item simple text='Profile'>
                                <Dropdown.Menu>
                                    <Link href="/showinfo">
                                        <Dropdown.Item as='a'>Show Profile</Dropdown.Item>
                                    </Link>
                                    <Link href="/AddJob">
                                        <Dropdown.Item as='a'>Add Job</Dropdown.Item>
                                    </Link>
                                    <Link href="/AddCertificate">
                                        <Dropdown.Item as='a'>Add Certificate</Dropdown.Item>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            :
                            <Link href="/register">
                                <Menu.Item as='a' header>
                                    Register
                                </Menu.Item>
                            </Link>
                        }
                        {/*if the loaded address is the owner of the contract, the Admin page will be revealed */}
                        {this.state.isOwner === false ? null :
                            <Link href="/Admin">
                                <Menu.Item as='a' header>
                                    Admin
                                </Menu.Item>
                            </Link>
                        }
                        {/*if the loaded address is a company, the  Company Requests button will appear  */}
                        {this.state.isCompany === true ? <Link href="/RequestsCompany">
                                <Menu.Item as='a' header>
                                    Company Requests
                                </Menu.Item>
                            </Link>
                            : null}
                        {/* if the loaded address is an institution, the   Institution Requests button will appear */}
                        {this.state.isInstitution === true ? <Link href="/RequestsInstitution">
                                <Menu.Item as='a' header>
                                    Institution Requests
                                </Menu.Item>
                            </Link>
                            : null}
                    </Container>
                </Menu>
                <Card vertical style={{margin: '60em 0em 0em', padding: '5em 0em', width: '100%'}}>
                    <Container textAlign='center'>
                        <Image centered size='normal'
                               src='https://modex.tech/wp-content/uploads/2018/11/logo-top3.png'/>
                        <Divider/>
                        <p>© 2019 Modex. | MODEX (Gibraltar) LIMITED, 57/63 Line Wall Road, Gibraltar </p>
                    </Container>
                </Card>
            </div>
        );
    }
}

export default FixedMenuLayout

