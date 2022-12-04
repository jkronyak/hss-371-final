import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Home from './components/Home';
import Shop from './components/Shop';
import Results from './components/Results';
import ShopItemPage from './components/ShopItemPage';
import NavigationHeader from './components/NavigationHeader';
import Cart from './components/Cart';

function App() {


  return (
    <div className="App">
      
      <Router>
        <header>
          <NavigationHeader/>
        </header>
		<h1>Top Notch Tech</h1>
        <Routes>
          {/* 
            This is where we define our Routes. 
            Each Route is associated with a Component.
          */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop/:id' element={<ShopItemPage/>}></Route>
          <Route path='/results' element={<Results/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
