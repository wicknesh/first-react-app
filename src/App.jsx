import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import TableMap from './components/TableMap'
import StateBasics from './components/StateBasics'
import TabComponent from './components/TabComponent'
import Counter from './components/Counter'
import JSXLearn from './components/JSXLearn'
import ExternalAPI from './components/ExternalAPI'


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<JSXLearn/>}/>
      <Route path='/l' element={<Login/>} />
      <Route path='/t' element={<TableMap/>} />
      <Route path='/s' element={<StateBasics />} />
      <Route path='/tab' element={<TabComponent />} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/api' element={<ExternalAPI/>} />
    </Routes>
    </>
  )
}

export default App