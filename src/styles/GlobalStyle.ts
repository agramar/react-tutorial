import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font-family: 'Spoqa Han Sans Neo', 'sans-serif';
vertical-align: top;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
*, *::before, *::after {
box-sizing: border-box;
}
html, body, body > #__next { height: 100%; }
body {
   color: #333;
   line-height: 1.25;
}
a {
color: inherit;
text-decoration: none;
}
a:hover,
a:active {
text-decoration: none;
}
a:active,
a:focus {
outline: none;
}
ol, ul {
list-style: none;
}
mark { background-color: #ddefff; }
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
img,
fieldset,
iframe {
max-width: 100%;
border: 0 none;
}
table {
width: 100%;
border-collapse: collapse;
border-spacing: 0;
/* table-layout: fixed; */
}
button, label{
cursor: pointer;
}
input, select,
textarea, button {
margin: 0;
padding: 0;
font-size: 100%;
font-family: 'Spoqa Han Sans Neo', 'sans-serif';
vertical-align: top;
outline: none;
}
input:disabled,
textarea:disabled,
select:disabled {
  background: #f3f3f3;
  cursor: not-allowed;
}
::-webkit-input-placeholder {
  color: #727579 !important;
}
::-moz-placeholder {
  color: #727579 !important;
} /* firefox 19+ */
:-moz-placeholder {
  color: #727579 !important;
}
:-ms-input-placeholder {
  color: #727579 !important;
} /* ie */

/* scrollbar */
.scrollbar::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background-clip: padding-box;
    background-color: #cbced6;
    border: 6px solid transparent;
    border-radius: 10px;
}
.scrollbar::-webkit-scrollbar-track {
  margin: 1px 0;
}
`;

export default GlobalStyle;
