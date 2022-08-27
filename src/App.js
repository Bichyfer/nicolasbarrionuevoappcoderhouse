import logo from './logo.svg';
import 'bootstrap/dist/css/boostrap.css';
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}

/* ----------Componentes---------- */


import NavBar from './components/NavBar';

function App() {;


  return (
   <>
   <h2>TheRestOfYourApplication</h2>
    <NavBar/>
    </>
  );
}

export default App;
