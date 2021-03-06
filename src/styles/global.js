import { createGlobalStyle } from 'styled-components';
import { dark } from './Paleta';
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

html, body, #root {
  height:100%;
  width: 100%;
}

body{
  margin: 0px;
  background-color: rgba(243, 243, 243, 1);
  -webkit-font-smoothing: antialiased !important;
}`;
