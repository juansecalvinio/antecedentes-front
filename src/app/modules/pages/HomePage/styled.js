import styled from 'styled-components';
import { Button, Card } from 'antd';

export const HomeContainer = styled.div`
    height: 100vh;
`;

export const HomeWrapper = styled.div`
    background-color: #EDEDED;
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
    margin: 5% auto;
`;

export const HomeCenterTitle = styled.div`
    margin: 0 auto;
    padding: 2em;
    text-align: center;
`;

export const HomeCenterOption = styled.div`
    /* box-shadow: 0 8px 16px 0 rgba(0,0,0,.1); */
    border-radius: 6px;
    flex: 1 1 0%;
    width: 45%;
    margin: 2em;
    margin-top: 0;
    text-align: center;
    width: 100%;
`;

export const HomeStyledButton = styled(Button)`
    height: 100px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out 0s;
    width: 100%;
`;

export const StyledCard = styled(Card)`
`;
