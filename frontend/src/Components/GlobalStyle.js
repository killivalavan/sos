import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{ 
    --blue: #2F80ED;
    --grey: #828282;
}

body{
    font-family: 'Roboto', sans-serif;
}
#logo{
    font-family: 'Oswald', sans-serif;
}
a{
    text-decoration: none;
    /* color: #333; */
}
a,button{
    &:hover{
      cursor: pointer;
    }
}
ul{
    list-style: none;
}
`;

export default GlobalStyle;
