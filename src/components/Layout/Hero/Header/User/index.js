import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserWrapper, UserInner } from './styled';
import { Icon, Popover } from 'antd';
import { getUserRequest } from './../../../../../store';


/**
 * Componente User
 * Contiene los datos del usuario, para mostrarse en Header
 */
class User extends Component {

    state = {
        menuVisible: false,
    }
    
    componentDidMount() {
        const { getUser } = this.props;
        //getUser();
    }

    handleLogout = () => {
        // método para cerrar sesión
        console.log('Sesión finalizada.');
    }

    handleVisibleChange = menuVisible => {
        this.setState({ menuVisible });
    };
    
    render() {
        //const { user } = this.props;
        return (
            <UserWrapper>
                <UserInner>
                    <Popover
                        content={<a onClick={this.handleLogout} href="/#/login">Cerrar sesión</a>}
                        title="Nombre de usuario"
                        trigger="click"
                        visible={this.state.menuVisible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        {/* <Icon type="user" /> */}
                        <FontAwesomeIcon icon={faUserCircle} size="2x" color="white" />
                    </Popover>
                </UserInner>
            </UserWrapper>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUserRequest()),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(User);