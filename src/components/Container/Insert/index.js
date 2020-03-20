import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import FormPerson from './FormPerson';
import FormAntecedent from './FormAntecedent';
import { StyledContainer, StyledStepContent, StyledStepAction, StyledStep, StyledButtonConfirm } from './styled';

const dataSteps = [
    {
        title: 'Ingrese CUIT/CUIL',
        content: <FormPerson />,
    },
    {
        title: 'Información',
        content: <FormAntecedent />,
    },
    {
        title: 'Finalización',
        content: 'Confirmar datos cargados'
    }
];

class Insert extends Component {

    state = {
        current: 0
    }

    handleNext = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    handlePrevious = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    handleFinish = () => {
        message.success('Ingreso de datos finalizado!');
    }

    render() {
        const { current } = this.state;
        return (
            <StyledContainer>
                <Steps current={current}>
                    {dataSteps.map(step => (
                        <StyledStep key={step.title} title={step.title} />
                    ))}
                </Steps>
                <StyledStepContent>{dataSteps[current].content}</StyledStepContent>
                <StyledStepAction>
                    {current > 0 && (
                        <Button style={{ marginRight: 8 }} onClick={this.handlePrevious}>Anterior</Button>
                    )}
                    {current < dataSteps.length - 1 && (
                        <Button type="primary" onClick={this.handleNext}>Siguiente</Button>
                    )}
                    {current === dataSteps.length - 1 && (
                        <StyledButtonConfirm type="primary" onClick={this.handleFinish}>Confirmar</StyledButtonConfirm>
                    )}
                </StyledStepAction>
            </StyledContainer>
        );
    }
}

export default Insert;