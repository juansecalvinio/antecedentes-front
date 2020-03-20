import styled from 'styled-components';

export const StyledFormContainer = styled.div`

    form {
        text-align: center;
        width: 100%;

        .ant-row.ant-form-item {
            text-align: center;

            .ant-form-item-label {
                width: auto;
        
                label {
                    font-size: 16px;
                    font-weight: 100;
                }
            }

            span.ant-form-item-children {
                align-items: center;
                display: flex;
                margin: 0 auto;
                width: 50%;
            }

            .ant-form-item-control-wrapper {
                //width: auto;
            }
        }
    }    
`;