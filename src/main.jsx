import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" component={<Home/>}></Route>
      <Route path="/" element={<Cardapio/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



