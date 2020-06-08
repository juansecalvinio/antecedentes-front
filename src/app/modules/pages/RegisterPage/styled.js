import styled from 'styled-components';
import { Button } from 'antd';

export const RegisterContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 100vh;    
    position: relative;
`;

export const RegisterWrapper = styled.div`
    border-radius: 8px;
    box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    /* display: flex;
    flex-direction: row; */
    margin: 5% auto;
    max-width: 882px;
    padding: 48px 40px 36px 40px;
    width: 100%;
    height: 80%;

    & .ant-form {
        display: flex;
        flex-direction: column;
    }

`;

export const RegisterFormHeader = styled.div`
    width: 100%;
`;

export const RegisterFormInner = styled.div`
        display: flex;
        flex-direction: row;
`;

export const RegisterFormCol = styled.div`
    flex: 1;
    padding: 5px;
`;

export const RegisterButton = styled(Button)`
    //width: 100%;
`;