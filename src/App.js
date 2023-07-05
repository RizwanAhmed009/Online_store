import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {Provider}  from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import store from './store/Store';


function App() {
  return (
    <div className="App">
  <>
 <Provider store={store}>
 <Router>
  <Navbar/>
  <Routes>
   <Route exact path="Home" element={<Home/>}></Route>
   <Route exact path="Cart" element={<Cart/>}></Route>
  </Routes>
  </Router>
 </Provider>

  </>
        
    </div>
  );
}

export default App;
