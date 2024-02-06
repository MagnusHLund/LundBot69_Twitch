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
  { id: { value: 1 }, name: { value: 'John', maxLength: 10 }, age: { value: 30, maxLength: 2 } },
  { id: { value: 2 }, name: { value: 'Jane', maxLength: 15 }, age: { value: 25, maxLength: 2 } },
  { id: { value: 3 }, name: { value: 'Doe', maxLength: 10 }, age: { value: 40, maxLength: 2 } },
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
      <DataTable data={data} editable={true} onDelete={(e) => alert(e)}/>

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
