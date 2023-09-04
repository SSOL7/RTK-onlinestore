import 'bootstrap/dist/css/bootstrap.min.css';
import Storenavbar from './Components/Storenavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Components/List';
import Cart from './Components/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Storenavbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
