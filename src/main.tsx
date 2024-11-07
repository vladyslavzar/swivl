import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feed from '@/pages/feed/FeedPage';

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
    font-size: 16px;
    color: #3E3F58; 
  }
  ul{list-style: none;}
  a {
    color: inherit; 
    text-decoration: inherit; 
  }
  button{
    border: 0;
    padding: 0;
    background-color: transparent;
    border: none;
  }
  .container {
    max-width: 1205px;
    margin: 0 auto;
    padding: 0 15px;
  }
  body {
    background-color: ${props => props.theme.colors.seondary};
    padding-bottom: 246px;
  }
  .shadow {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

const theme = {
  colors: {
    primary: '#3E4056',
    seondary: '#ECF1F8',
    accent: '#F05D63',
    white: '#fff',
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed/>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
