import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Item from "./components/Item";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  
  return (
    <BrowserRouter>
      <NavBar/>
       
        <Routes>
          <Route path='/' element={ <ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}


/* function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
         <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer />} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
} */

export default App;