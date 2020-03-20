import styled from 'styled-components';
import { Button } from 'antd';

export const HomeContainer = styled.div`
    height: 100vh;
`;

export const HomeWrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const HomeCenter = styled.div`
    flex: 2;
`;

export const HomeCenterInner = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    flex: 1 1 0%;
    margin: 2% auto;
`;

export const HomeCenterTitle = styled.div`
    margin: 0 auto;
    padding: 2em;
    text-align: center;
`;

export const HomeCenterOption = styled.div`
    flex: 1 1 0%;
    width: 45%;
    margin: 2em;
    margin-top: 0;
    text-align: center;
    width: 60%;
`;

export const HomeStyledButton = styled(Button)`
    box-shadow: 0 7px 10px 0 rgba(0,0,0,0.15);
    height: 100px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out 0s;
    width: 100%;
`;