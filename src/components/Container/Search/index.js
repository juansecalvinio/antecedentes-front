import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Button, Table, Tooltip } from 'antd';
import { StyledContainer, StyledContent } from './styled';

// redux
import { getPersonRequest } from './../../../store';

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'CUIL',
        dataIndex: 'cuil',
        key: 'cuil',
    },
    {
        title: 'DNI',
        dataIndex: 'doc_number',
        key: 'doc_number',
    },
    {
        title: 'Email',
        dataIndex: 'mail',
        key: 'mail',
    },
];

class Search extends Component {

    state = {
        data: [],
        table: false,
    }

    componentDidMount() {
        const { getPerson } = this.props;
        getPerson();
    }

    handleClick = () => {
        const { loading, person, getPerson } = this.props;
        const { data } = this.state;
        getPerson();
        data.push(person);
        this.setState({ data: data, table: !loading });
    }

    render() {
        const { data, table } = this.state;
        const { loading } = this.props;
        return(
            <StyledContainer>
                <StyledContent>
                    <Form>
                        <Form.Item label="CUIT/CUIL">
                            <Input placeholder="Ejemplo: 20-12345678-2" style={{marginRight: '5px'}} />
                            <Tooltip placement="right" title="Buscar información">
                                <Button type="primary" icon="search" loading={loading} onClick={this.handleClick}></Button>
                            </Tooltip>
                        </Form.Item>
                    </Form>
                    {table && <Table bordered="true" columns={columns} dataSource={data} rowKey="id" rowSelection={{}}></Table>}
                </StyledContent>
            </StyledContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        person: state.person,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPerson: () => dispatch(getPersonRequest()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);