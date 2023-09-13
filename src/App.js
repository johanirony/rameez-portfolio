
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/rameez-portfolio' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/rameez-portfolio/about' element={<About/>}></Route>
        <Route path='/rameez-portfolio/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>


    </>
  );
}

export default App;
