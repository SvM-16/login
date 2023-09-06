import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from './pages/RegisterPages'
import LoginPages from './pages/LoginPages'
import { AunthProvider } from './context/AuthContext'
import TaskPages from './pages/TaskPages'
import ProfilePages from './pages/ProfilePages'
import TaskFromPages from './pages/TaskFormPages'
import HomePages from './pages/HomePages'
import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TasksContext'

function App(){
  return(
    <>
    <AunthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/login' element={<LoginPages />}/>
            <Route path='/register' element={<RegisterPages />}/>
            
            <Route element={<ProtectedRoute/>}>
              <Route path='/tasks' element={<TaskPages/>}/>
              <Route path='/add-task' element={<TaskFromPages/>}/>
              <Route path='/tasks/:id' element={<TaskFromPages/>}/>
              <Route path='/profile' element={<ProfilePages/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AunthProvider>
    </>
  )
}

export default App