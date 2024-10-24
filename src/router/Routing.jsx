import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import  Home  from './../components/Home';
import About from "./../components/About";
import Login from "./../components/Login";
import Layout from "./../components/Layout";
import Users from '../components/Usuarios';
import UserDashboard from '../components/UserDashboard';
export const Routing = () => {

   return (
      <BrowserRouter>
         {/* <AuthProvider> */}
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route index element={<Login />} />
                  <Route path='home' element={<Home />} />
                  <Route path='acerca' element={<About />} />
                  <Route path='usuarios' element={<Users />} />
                  <Route path='usersDashboard' element={<UserDashboard />} />
                  {/* <Route path='usuarios' element={<Users />} /> */}
                  {/* <Route path={`perfil`} element={<MiPerfil />} /> */}
               </Route>

            </Routes>
         {/* </AuthProvider> */}
      </BrowserRouter>

   )
}