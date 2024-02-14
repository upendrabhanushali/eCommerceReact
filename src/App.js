import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import DetailPage from './components/DetailPage.js/DetailPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='cart' element={<Cart/>}/>
        <Route path='detail' element={<DetailPage/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
