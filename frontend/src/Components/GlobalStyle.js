import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
//Disable text selecting
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    //Disable text selecting
    /* -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
} */
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
    :hover{
        color: rgba(13,110,253,.9); 
    }
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

input[type="text"]{
    -webkit-user-select: text;
}

@media screen and (max-width: 678px) {

}

`;

export default GlobalStyle;
