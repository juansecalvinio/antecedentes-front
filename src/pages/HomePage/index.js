import React, { Component } from 'react';
import { 
    HomeContainer, 
    HomeWrapper,
    HomeCenter,
    HomeCenterTitle,
    HomeCenterInner,
    HomeCenterOption,
    HomeStyledButton,
} from './styled';

import { Typography } from 'antd';

const { Title } = Typography;

class HomePage extends Component {

    handleClickSearch = () => {
        this.props.history.push("/search");
    }

    handleClickInsert = () => {
        this.props.history.push("/insert");
    }

    render() {
        return (
            <HomeContainer>
                <HomeWrapper>
                    <HomeCenter>

                        <HomeCenterTitle>
                            <Title level={3}>Seleccione una opción para continuar:</Title>
                        </HomeCenterTitle>

                        <HomeCenterInner>                            
                            <HomeCenterOption>
                                <HomeStyledButton size="large" type="default" onClick={this.handleClickSearch}>Búsqueda</HomeStyledButton>
                            </HomeCenterOption>

                            <HomeCenterOption>
                                <HomeStyledButton size="large" type="default" onClick={this.handleClickInsert}>Ingresar datos</HomeStyledButton>
                            </HomeCenterOption>
                        </HomeCenterInner>

                    </HomeCenter>
                </HomeWrapper>
            </HomeContainer>
        )
    }
}

export default HomePage;
