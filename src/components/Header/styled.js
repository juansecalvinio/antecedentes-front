import styled from 'styled-components';

export const HeaderNav = styled.nav`
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    max-height: 100px;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 300ms ease;
    will-change: transform;
    z-index: 500;
`;

export const HeaderWrapper = styled.div`
    background-color: rgba(255, 255, 255, 1);
    display: block;
`;

export const HeaderInner = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderContentWrapper = styled.div`
    margin: 0 auto;
    max-width: 1080px;
    min-width: 0;
    width: 100%;
`;

export const HeaderContentInner = styled.div`
    align-items: center;
    display: flex;
    height: 65px;
`;

export const HeaderLeft = styled.div`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    z-index: 500;

    a { 
        text-decoration: none;
    }

    img {
        width: 50%;
    }
`;

export const HeaderRightWrapper = styled.div`
    display: block;
    flex: 0 0 auto;
    z-index: 500;
`;

export const HeaderRightInner = styled.div`
    color: rgba(0, 0, 0, 0.54);
    //display: block;
    fill: rgba(0, 0, 0, 0.54);
    font-size: 15.8px;
    font-style: normal;
    letter-spacing: 0px;
    line-height: 20px;
`;

export const HeaderRightContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const HeaderButtonWrapper = styled.div`
    visibility: visible;
`;

export const HeaderButtonInner = styled.div`
    display: block;    
    margin-right: 16px;
`;

export const HeaderUserWrapper = styled.div`
    display: flex;
`;

export const HeaderUserInner = styled.div`
    align-items: center;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
`;



