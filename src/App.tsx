import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import RequireAuth from './features/auth/RequireAuth';
import Welcome from './features/auth/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      {/* public routes */}
      <Route index element={<Public />} />
      <Route path='/login' element={<Login />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path='welcome' element={<Welcome />} />
      </Route>
    </Routes>
  );
}

export default App;
