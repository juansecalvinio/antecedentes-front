import React from 'react';
import whiteBrand from './../../img/white-brand-new.png';
import { Link } from 'react-router-dom';
import User from './User';
import {
    HeaderNav,
    HeaderWrapper,
    HeaderInner,
    HeaderRightWrapper,
    HeaderRightInner,
    HeaderContentWrapper,
    HeaderContentInner,
    HeaderLeft
} from './styled';


/**
 * Componente Header
 * Contiene logo de la app, datos del usuario, y botón del logout
 */
const Header = () => {
    return (
        <HeaderNav>
            <HeaderWrapper>
                <HeaderInner>
                    <HeaderRightWrapper>
                        <HeaderRightInner>
                            <HeaderContentWrapper>
                                <HeaderContentInner>
                                    <HeaderLeft>
                                        <Link to={'/'}>
                                            <img src={whiteBrand} alt="white-brand"></img>
                                        </Link>
                                    </HeaderLeft>
                                    <HeaderRightWrapper>
                                        <HeaderRightInner>
                                            <User />
                                        </HeaderRightInner>
                                    </HeaderRightWrapper>
                                </HeaderContentInner>
                            </HeaderContentWrapper>
                        </HeaderRightInner>
                    </HeaderRightWrapper>
                </HeaderInner>
            </HeaderWrapper>
        </HeaderNav>
    )
}

export default Header;
