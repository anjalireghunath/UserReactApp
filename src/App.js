import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ViewBook from './components/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<ViewBook/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
