import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './features/NotFound/NotFound'
import Home from './features/Home/Home'
import Login from './features/Login/Login'
import Registration from './features/Registration/Registration'



function App() {


  return (
    <section id='App'>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>

      </Routes>
    </section>



  )
}

export default App
