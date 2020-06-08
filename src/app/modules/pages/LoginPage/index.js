import React, { Component } from 'react';
import api from './../../utils/api';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Checkbox, Typography } from 'antd';
import { LoginContainer, LoginWrapper, LoginButton } from './styled';

const { Title } = Typography;


class LoginPage extends Component {

    state = {
        errorLogin: false,
        errorLoginMessages: [],
        currentUser: api.getUserFake(),
        inputUser: '',
        inputPassword: '',
    }

    componentDidMount() {
        console.log(this.state.currentUser)
    }

    handleClickLogin = () => {
        const { inputUser, inputPassword, currentUser } = this.state;
        if(currentUser.user === inputUser && currentUser.password === inputPassword) {
            this.setState({ errorLogin: false });
            this.props.history.push('/home');
        } else {
            this.setState({ errorLogin: true });
        }        
    };

    render() {
        return (
            <LoginContainer>
                <LoginWrapper>
                    <Form>
                        <Form.Item>
                            <Title level={2}>Login</Title>
                        </Form.Item>
                        <Form.Item>
                             <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Usuario" 
                                onChange={(e) => this.setState({ inputUser: e.target.value })}
                                />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Contraseña" 
                                onChange={(e) => this.setState({ inputPassword: e.target.value })}
                                />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Recordar mis datos</Checkbox>
                            <a href="/#/">
                                Olvidé mi contraseña
                            </a>
                            <LoginButton type="primary" onClick={this.handleClickLogin}>
                                Ingresar
                            </LoginButton>
                            Si no estas registrado podes hacerlo <a href="/#/register">acá</a>
                        </Form.Item>
                    </Form>
                </LoginWrapper>
            </LoginContainer>
        )
    }
}

export default LoginPage;
