import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from './pages/RegisterPages'
import LoginPages from './pages/LoginPages'
import { AunthProvider } from './context/AuthContext'

function App(){
  return(
    <>
    <AunthProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<h1>Home page</h1>}/>
            <Route path='/login' element={<LoginPages />}/>
            <Route path='/register' element={<RegisterPages />}/>
            <Route path='/tasks' element={<h1>Tasks page</h1>}/>
            <Route path='/add-task' element={<h1>New Task</h1>}/>
            <Route path='/tasks/:id' element={<h1>Update Task</h1>}/>
            <Route path='/profile' element={<h1>Profile</h1>}/>
          </Routes>
        </BrowserRouter>
      </AunthProvider>
    </>
  )
}

export default App