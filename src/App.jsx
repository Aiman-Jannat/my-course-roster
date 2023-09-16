import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './components/home/Home'


function App() {
  

  return (
    <>
      <div>
      <Home></Home>
      <ToastContainer/>
      </div>
      
      
    </>
  )
}

export default App
