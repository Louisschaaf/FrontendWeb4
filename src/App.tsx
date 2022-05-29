import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserOverview from './components/user-overview/index';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
import FriendsOverviewTable from './components/friends/FriendsOverviewTable';
import FriendOverview from './components/friends/index';
import MessageOverview from './components/Message/index';
import Status from './components/Status/ChangeStatus';
import PublishMessage from './components/Message/PublishMessage';

function App() {
return (
    <>
    
    <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
        <a className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none" href="/"> Studentbook </a>
        
    </header>
    {sessionStorage.getItem('token') !== null ? (
    <main className="container mt-5">
        <div id='wrap'>
            <div id='window1' className='window'>
                <MessageOverview/>
            </div>
            <div id='window2' className='window'>
                <div id='pane1' className='pane'>
                    <Status/>
                </div>
                <div className='pane' id='pane2'>
                    <PublishMessage/>
                </div>
                <div className='pane' >
                    <FriendOverview/>
                </div>
            </div>
        </div>
        
    </main>
    ) : (<Login />)}
    
    </>
    /*return (
        <>
            <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
                <a
                    className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none"
                    href="/"
                >
                    UCLL Users
                </a>
                <nav>
                    <ul className="nav justify-content-center">
                        <li>
                            <Link to="/users" className="nav-link px-4 fs-5 text-white">
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link px-4 fs-5 text-white">
                                Add user
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="container mt-5">
                <Routes>
                    <Route path="/" element={<UserOverview />} />
                    <Route path="/users" element={<UserOverview />} />
                </Routes>
            </main>
        </>
    );*/
);
}
export default App;
