import React, { Component } from 'react';
import { 
    RegisterContainer, 
    RegisterWrapper, 
    RegisterButton,
    RegisterFormHeader,
    RegisterFormInner,
    RegisterFormCol
} from './styled';
import {
    Alert,
    Form,
    Input,
    Typography,
  } from 'antd';

const { Title } = Typography;
const errors = [];

class RegisterPage extends Component {

    state = {
        error: true,
        errors,
        fullname: "",
        username: "",
        password: "",
        rePassword: "",
        email: "",
        reEmail: "",
    }

    componentDidMount() {
        const { error, errors } = this.state;
        if(error) {
            console.table(errors);
        }
    };

    handleNameChange = (e) => {
        const { value } = e.target;
        this.setState({ fullname: value });
    };

    handleEmailChange = (e) => {
        const { value } = e.target;
        this.setState({ email: value });
    };

    handleConfirmEmailChange = (e) => {
        const { value } = e.target;
        const { email, reEmail } = this.state;
        if(email === reEmail) {
            this.setState({ reEmail: value });
        } else {
            console.error('Los emails no coinciden');
        }
    };

    handleUsernameChange = (e) => {
        const { value } = e.target;
        this.setState({ username: value });
    };

    handlePasswordChange = (e) => {
        const { value } = e.target;
        this.setState({ password: value });
    }

    handleConfirmPassChange = (e) => {
        const { value } = e.target;
        const { password, rePassword, errors } = this.state;
        if(password === rePassword) {
            this.setState({ rePassword: value });
        } else {
            this.setState({
                error: true,
                errors: errors.push('Las contraseñas no coinciden.'),
            })
        }
    };

    handleClick = () => {
        console.table(this.state);
        const { fullname, username, email, password, errors } = this.state;
        if(fullname === "") {
            this.setState({ 
                error: true,
                errors: errors.push('Debes completar tu nombre.'),
            });
        }
        if(username === "") {
            this.setState({
                error: true,
                errors: errors.push('Debes completar tu usuario.'),
            });
        }
        if(email === "") {
            this.setState({ 
                error: true,
                errors: errors.push('Debes completar tu email.'),
            });
        }
        if(password === "") {
            this.setState({ 
                error: true,
                errors: errors.push('Debes completar tu contraseña.'),
            });
        }
        if(Object.keys(errors).length === 0) {
            console.error('Error al registrarse.');
        } else {
            console.log('Se ha registrado correctamente');
        }
    };

    render() {

        const { error } = this.state;
        
        return (
            <RegisterContainer>
                <RegisterWrapper>
                    <Form>
                        <RegisterFormCol>
                            <Form.Item>
                                <RegisterFormHeader>
                                    <Title level={2}>Registro</Title>
                                </RegisterFormHeader>                        
                            </Form.Item>
                        </RegisterFormCol>            
                        <RegisterFormCol>
                            <RegisterFormInner>
                                <RegisterFormCol>
                                    <Form.Item label="Nombre y Apellido">
                                        <Input onChange={this.handleNameChange} />
                                    </Form.Item>
                                    <Form.Item label="Contraseña">
                                        <Input onChange={this.handlePasswordChange} />
                                    </Form.Item>
                                    <Form.Item label="Email">
                                        <Input onChange={this.handleEmailChange} />
                                    </Form.Item>
                                </RegisterFormCol>
                                <RegisterFormCol>
                                    <Form.Item label="Usuario">
                                        <Input onChange={this.handleUsernameChange} />
                                    </Form.Item>
                                    <Form.Item label="Confirmar contraseña">
                                        <Input onChange={this.handleConfirmPassChange} />
                                    </Form.Item>
                                    <Form.Item label="Confirmar email">
                                        <Input onChange={this.handleConfirmEmailChange} />
                                    </Form.Item>
                                </RegisterFormCol>
                            </RegisterFormInner>
                        </RegisterFormCol>
                        <Form.Item>
                            <RegisterButton type="primary"
                            onClick={this.handleClick}>
                                Registrarme
                            </RegisterButton>
                        </Form.Item>
                    </Form>
                    {error && errors.map(e => <Alert message="Error"
                    description={e} type="error" showIcon banner />)}
                </RegisterWrapper>
            </RegisterContainer>
        )
    }
}

export default RegisterPage;
