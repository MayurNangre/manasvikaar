// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Mayur Nangre</h1>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            {/* <Route path='Store' element={<Ourstore/>}/> */}

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
