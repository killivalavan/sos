import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 // Scroll Bar
 *::-webkit-scrollbar {
    width: 10px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
    }

html{ 
    --blue: #0d6efd;
    --grey: #828282;
    scroll-behavior: smooth;
}

body{
    font-family: 'Roboto', sans-serif;
    overflow: auto;
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

@media screen and (max-width: 678px) {

}

`;

export default GlobalStyle;
