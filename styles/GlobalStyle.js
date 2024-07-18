import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body.dark-mode {
  --img: invert(1);
  --avatar-shadow: rgba(28,22,47,.3);
}

body.light-mode {
  --img: invert(0);
  --avatar-shadow: rgba(48,52,77,.1);
} 

* {
  --lime-green-light: #DFFFD6;  /* Light lime green */
  --lime-green: #A4FF7A;        /* Lime green */
  --lime-green-dark: #6EBF4B;   /* Dark lime green */
  
  --squirtle-blue-light: #D6F7FF; /* Light squirtle blue */
  --squirtle-blue: #76D1FF;       /* Squirtle blue */
  --squirtle-blue-dark: #4BA8BF;  /* Dark squirtle blue */
  
  --white: #FFFFFF;             /* Pure white */
  --white20: #ecedee;           /* Slightly off-white */
  --black: #11181C;
  --light-gray: #858585;
  --gray: #687076;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.03);
  
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  transition: all 0.5s ease;
}

html{
    scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  transition: background 0.5s ease, color 0.5s ease;
}

a{
  color: ${({ theme }) => theme.text.primary};
}

.main{
  min-height: 100vh;
}

.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

button {
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  transition: background 0.3s ease, color 0.3s ease;
}

button:hover {
  background: linear-gradient(270deg, var(--lime-green), var(--squirtle-blue)); /* Lime green to squirtle blue gradient */
  color: ${({ theme }) => theme.text.onPrimary};
}

.nft-clipped{
  clip-path: url(#hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.oval-clipped{
  clip-path: url(#oval);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

export default GlobalStyle;
