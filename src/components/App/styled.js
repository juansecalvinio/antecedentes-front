import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,500,700,900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Rubik:100,300,500,700,900&display=swap');
    background-color: #fdfdfd;
    font-family: 'Roboto', sans-serif !important;
    height: 100vh;
    margin: 0;    
    padding: 0;
  }

  div#root {
    background-color: #F4F5F7;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;