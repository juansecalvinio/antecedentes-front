import React, { Component } from 'react'
import { StyledLayout } from './styled';

import Hero from './Hero';

class Layout extends Component {
    render() {
        return (
            <StyledLayout>
                <Hero />
            </StyledLayout>
        )
    }
}

export default Layout;