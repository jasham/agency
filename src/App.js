import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/home';
import theme  from './utility/theme'
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={Home} exact path="/" />
      </BrowserRouter>    
    </ThemeProvider>
  );
}

export default App;
