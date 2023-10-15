import React from 'react';
import './Login.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Cadastre from './Cadastre';
import LoginForm from './LoginForm';
import LoginpasswordLost from './LoginpasswordLost';
import LoginpasswordReset from './LoginpasswordReset';
import Pagina404 from '../Pagina404';
import Dog from '../../Assets/login.jpg';
import { userContext } from '../../userContext';
import Head from '../Helper/Head';

const Login = () => {
    const { login } = React.useContext(userContext);

    if (login === true) <Navigate to="/conta" />;
    return (
        <section className="login animeLeft">
            <Head title="Login" description="Tela de login do site" />
            <div className="forms animeLeft">
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="criar" element={<Cadastre />} />
                    <Route path="perdeu" element={<LoginpasswordLost />} />
                    <Route path="resetar" element={<LoginpasswordReset />} />
                    <Route path="*" element={<Pagina404 />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;
