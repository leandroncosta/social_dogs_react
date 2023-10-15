import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Pagina404 from './Components/Pagina404';
import { UserStorage } from './userContext';
import Conta from './Components/User/Conta';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <main className="AppBody">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Login />} />
                            <Route path="*" element={<Pagina404 />} />
                            <Route path="foto/:id" element={<Photo />} />
                            <Route
                                path="perfil/:user"
                                element={<UserProfile />}
                            />
                            <Route
                                path="conta/*"
                                element={
                                    <ProtectedRouter>
                                        <Conta />
                                    </ProtectedRouter>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
};

export default App;
