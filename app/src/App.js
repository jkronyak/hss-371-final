import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography
} from "@mui/material";


import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography 
            href="/"
            component="a"
            sx={{ m: 2}}
          >
              Home
          </Typography>
          <Typography 
            href="/shop"
            component="a"
            sx={{ m: 2}}
          >
              Shop
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
          <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
