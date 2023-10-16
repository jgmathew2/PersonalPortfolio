import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './screens/HomePage';
import logo from './logo.svg';


function App() {
  return (
    <>
    <BrowserRouter>
        <Container
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            width: '100vw',
            minHeight: '100vh',
            overflow: 'scroll',
            background: "#413434"


          }}
          className="justify-content-center"
          fluid
        >
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="feed" element={<div />} />
    
            </Route>
          </Routes>
        </Container>
      <Routes>
        <Route>

          
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
