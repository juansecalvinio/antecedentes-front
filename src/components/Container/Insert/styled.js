import styled from 'styled-components';
import { Steps, Button } from 'antd';
const { Step } = Steps;

export const StyledContainer = styled.div`
    flex: 1;
    margin: 2em auto;
    max-width: 1080px;
    min-height: 1000px;
    padding: 24px;
    width: 100%;
`;

export const StyledStepContent = styled.div`
    background-color: #ffffff;
    //border: 1px solid #e9e9e9;
    border-radius: 3px;
    box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    margin-top: 16px;
    min-height: 200px;
    padding: 40px;
    text-align: center;
`;

export const StyledStep = styled(Step)`
    & .ant-steps-item-title {
        font-size: 20px;
    }
`;

export const StyledStepAction = styled.div`
    margin-top: 24px;
    text-align: right;
`;

export const StyledButtonConfirm = styled(Button)`
    background-color: #52c41a !important;
    border-color: #52c41a !important;

    &:hover {
        background-color: #6DD33A !important;
        border-color: #6DD33A !important;
    }
`;