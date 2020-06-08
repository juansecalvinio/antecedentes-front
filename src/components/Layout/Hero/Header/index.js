import React from 'react';
import mainBrand from './../../../../img/main-brand.png';
import { Link } from 'react-router-dom';
import User from './User';
import { StyledHeader, StyledLogo } from './styled';


/**
 * Componente Header
 * Contiene logo de la app, datos del usuario, y botón del logout
 */
const Header = () => {
    return (
        <StyledHeader>
            <Link style={{textDecoration: 'none'}} to="/">
                <StyledLogo src={mainBrand} />
            </Link>
            <User />
        </StyledHeader>
    )
}

export default Header;
