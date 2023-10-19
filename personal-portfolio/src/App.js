import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './screens/HomePage';
import ProjectList from './screens/ProjectList';
import WorkList from './screens/WorkList';
import CourseList from './screens/CourseList';



function App() {

  return (
    <>
    <BrowserRouter>
        <Container
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            width: '100vw',
            maxWidth: window.screen.innerWidth,
            minHeight: '100vh',
            overflow: 'scroll',
            horizontalOverrflow: 'hidden', 
            margin: 0,
            background: "#413434",
          }}
          className="justify-content-center"
          fluid
        >
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="projectlist" element={<ProjectList />} />
              <Route path="worklist" element={<WorkList/>} />
              <Route path="courselist" element={<CourseList />} />
            </Route>
          </Routes>
        </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
