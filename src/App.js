import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider >
      <BrowserRouter>
        {/* <Route component={Kitchensink} exact path="/sink" /> */}
      </BrowserRouter>    
    </ThemeProvider>
  );
}

export default App;
