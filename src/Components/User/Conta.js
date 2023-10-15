import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { userContext } from '../../userContext';
import Pagina404 from '../Pagina404';
import Head from '../Helper/Head';

const Conta = () => {
    const { data } = React.useContext(userContext);

    return (
        <section className="container ">
            <Head title="Minha conta" description="" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="*" element={<Pagina404 />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default Conta;
