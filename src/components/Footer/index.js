import React, { Component } from 'react';
import { StyledFooter, StyledFooterContainer } from './../Footer/styled';
import blackBrand from './../../img/black-brand-new.png';

class Footer extends Component {
    render() {
        return(
            <StyledFooter>
                <StyledFooterContainer>
                    <img src={blackBrand} alt="black-brand" />
                </StyledFooterContainer>
            </StyledFooter>
        );
    }
};

export default Footer;