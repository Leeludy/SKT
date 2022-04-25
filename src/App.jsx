import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./index.css";
import Admin from "./pages/Admin";
import ProductAdmin from "./pages/ProductAdmin";
import Pilot from "./pages/Pilot";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Login from "./components/Auth/Login";
import Dashboard from "./pages/Dashboard";
import { Missions } from './components/Missions';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/productadmin' element={<ProductAdmin />} />
        <Route path='/pilot' element={<Pilot />} />
        <Route path='/missions/*' element={<Missions />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </QueryClientProvider>
  );};

export {App};