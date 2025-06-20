import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Book from './pages/Book';
import Login from './pages/Login';
import Register from './pages/Register';
import BookDetail from './pages/BookDetail';
import AdminPanel from './pages/AdminPanel'
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/book/:id' element={<BookDetail />} />
         <Route path='/admin' element={<PrivateRoute adminOnly={true}><AdminPanel /></PrivateRoute>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;