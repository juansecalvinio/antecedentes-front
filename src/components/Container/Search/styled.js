import styled from 'styled-components';

export const StyledContainer = styled.div`
    flex: 1;
    margin: 5% auto;
    max-width: 1080px;
    min-height: 1000px;    
    padding: 24px;
    padding-top: 0;
    width: 100%;
`;

export const StyledContent = styled.div`
    background-color: #FFF;
    //border: 1px solid #e9e9e9;
    border-radius: 6px;
    //box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
    margin-top: 16px;
    min-height: 200px;
    padding: 40px;
    text-align: center;

    form {
        text-align: center;
        width: 100%;

        .ant-row.ant-form-item {
            text-align: center;

            .ant-form-item-label {
                width: auto;
        
                label {
                    font-size: 18px;
                    font-weight: 300;
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