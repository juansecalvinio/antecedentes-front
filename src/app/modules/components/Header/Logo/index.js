import React from 'react'
import { LogoWrapper } from './styled';
import { Link } from 'react-router-dom';
import logo from './../../../../img/main-brand.png';

export const Logo = () => {
    return (
        <LogoWrapper>
            <Link style={{textDecoration: 'none'}} to="/">
                <img src={logo} alt='logo' />
            </Link>
        </LogoWrapper>
    )
}
