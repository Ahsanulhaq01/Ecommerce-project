import {Routes ,Route} from 'react-router';
import HomePage from './pages/HomePage';
import Checkout from './pages/checkout/Checkout';
import Order from './pages/Order';
import Tracking from './pages/Tracking';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  

  return (
    <>
    <Routes>
      <Route index element ={<HomePage/>}/>
      <Route path='checkout' element= {<Checkout/>}/>
      <Route path='orders' element = {<Order/>}/>
      <Route path='tracking' element = {<Tracking/>}/>
      <Route path='*' element = {<NotFoundPage/>}/>
    </Routes>

    </>
  )
}

export default App
