import { createGlobalStyle } from 'styled-components';
import AvenirNextCyrBold from './fonts/AvenirNextCyr-Bold.woff';
import AvenirNextCyrLight from './fonts/AvenirNextCyr-Light.woff';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {

@font-face {
        font-family: 'AvenirNextCyrBold';
        src: local('AvenirNextCyrBold'), 
        url(${AvenirNextCyrBold}) format('woff');      
        font-style: normal;
    }

    @font-face {
        font-family: 'AvenirNextCyrLight';
        src: local('AvenirNextCyrLight'), 
        url(${AvenirNextCyrLight}) format('woff');
        font-style: normal;
    }

  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  

  background-color: ${p => p.theme.colors.backgroundBody};

  }



p, h2, h1 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration:none
  
}
`;
