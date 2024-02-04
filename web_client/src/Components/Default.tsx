import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DataTable from './DataTable';

import Home from './Home';
import SongRequest from './SongRequest';
import Gambling from './Gambling';
import Commands from './Commands';

import './Default.css'

const RedirectToHome: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
};

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 40 },
];

const Default: React.FC = () => {
  const navLinks = [
    { title: 'Home', path: '/home', image: '/home.png' },
    { title: 'Song request', path: '/sr', image: '/songRequest.png' },
    { title: 'gambling', path: '/gambling', image: '/gambling.png' },
    { title: 'Commands', path: '/commands', image: '/Commands.png' },
  ];

  return (
    <>
      <Navbar image='/LundBot69_Icon.png' links={navLinks} />
      <DataTable data={data} editable={true}/>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sr' element={<SongRequest />} />
        <Route path='/gambling' element={<Gambling />} />
        <Route path='/commands' element={<Commands />} />
        <Route path='*' element={<RedirectToHome />} />
      </Routes>
    </>
  );
};

export default Default;
