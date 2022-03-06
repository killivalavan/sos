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

/* For iphone */
@media screen and (max-width: 678px) {
    input[type="text"]{
    -webkit-user-select: text;
}
}

 /* Portrait */
 @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  }

  @media screen and (max-width: 620px) {
    padding-bottom: env(safe-area-inset-bottom);
    padding-top: env(safe-area-inset-top);
  }

  @supports (-webkit-touch-callout: none) {
  /* CSS specific to iOS devices */ 
  padding-bottom: calc(1rem + env(safe-area-inset-bottom));
}


`;

export default GlobalStyle;
