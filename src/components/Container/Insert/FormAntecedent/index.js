import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Checkbox, Upload, Icon } from 'antd';
import { StyledFormContainer } from './styled';
const { TextArea } = Input;
const { Dragger } = Upload;

const options = [
    'Delegado / Miembro de sindicato',
    'Problemas de conducta',
    'Problemas de asistencia / puntualidad',
    'Violencia',
    'Robos y/o hurtos',
    'Dificultades médicas o físicas crónicas',
    'Adicciones'
];

class FormAntecedent extends Component {

    state = {
        checkedList: [],
        indeterminate: true,
        checkAll: false,
    }

    handleOnChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < options.length,
            checkAll: checkedList.length === options.length,
        });
    }

    handleCheckAll = e => {
        this.setState({
            checkedList: e.target.checked ? options : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    render(){

        const { checkedList, indeterminate, checkAll } = this.state;

        return (
            <StyledFormContainer>
                <Form>
                    <Form.Item label="Observaciones">
                        <TextArea rows={4}></TextArea>
                    </Form.Item>
                    <Form.Item label="Items para identificar">
                        <Form.Item style={{ borderBottom: '1px solid #E9E9E9', textAlign: "left" }}>
                            <Checkbox indeterminate={indeterminate}
                            onChange={this.handleCheckAll}
                            checked={checkAll}
                            >
                                Seleccionar todo
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox.Group
                            options={options}
                            value={checkedList} 
                            onChange={this.handleOnChange}
                            style={{ textAlign: "left" }}>
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Subir documentos públicos">
                        <Dragger>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Haga click o arrastre aquí el archivo para subir</p>
                        </Dragger>
                    </Form.Item>
                </Form>
            </StyledFormContainer>
        )
    }
};

export default FormAntecedent;