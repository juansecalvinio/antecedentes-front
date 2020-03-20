import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Tooltip } from 'antd';
import { StyledFormContainer } from './styled';

const FormPerson = () => {

    return (
        <StyledFormContainer>
            <Form>
                <Form.Item label="CUIT/CUIL">
                    <Input placeholder="Ejemplo: 20-12345678-2" style={{marginRight: '5px'}} />
                    <Tooltip placement="right" title="Traer datos de AFIP">
                        <Button type="primary" icon="api" loading={false}></Button>
                    </Tooltip>
                </Form.Item>
                {/* Espacio para mostrar datos de la API */}
            </Form>
        </StyledFormContainer>
    )
};

export default FormPerson;
