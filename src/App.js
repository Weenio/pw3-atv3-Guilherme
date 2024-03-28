import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from "./navbar/NavBar.js";

import Home from "./components/Home.js";
import Get from './components/GettingR.js';
import List from './components/ListingR.js';
import Create from './components/CreateR.js';
import Update from "./components/UpdateR.js";
import Delete from "./components/DeleteR.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path="/Get" element={<Get/>}/>
            <Route path="/List" element={<List/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/Update" element={<Update/>}/>
            <Route path="/Delete" element={<Delete/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
