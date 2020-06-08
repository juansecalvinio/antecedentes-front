import styled from 'styled-components';
import { Button } from 'antd';

export const LoginContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 100vh;    
    position: relative;
`;

export const LoginWrapper = styled.div`
    border-radius: 8px;
    box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    margin: 5% auto;
    padding: 48px 40px 36px 40px;
    width: 368px;
    height: 416px;
`;

export const LoginButton = styled(Button)`
    width: 100%;
`;