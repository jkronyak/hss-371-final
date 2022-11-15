import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography
} from "@mui/material";


import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography 
            href="/"
            component="a"
            sx={{}}
          >
              Home
          </Typography>
          <Typography 
            href="/store"
            component="a"
            sx={{}}
          >
              Home
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>HSS 371 Final Project</h1>
      <Router>
        <Routes>
          {/* 
            This is where we define our Routes. 
            Each Route is associated with a Component.
          */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
