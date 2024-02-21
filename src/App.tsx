import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './features/NotFound/NotFound'
import Home from './features/Home/Home'
import Login from './features/Login/Login'



function App() {


  return (
    <section id='App'>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </section>



  )
}

export default App
