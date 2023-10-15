import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head
                title="Feed Fotos"
                description="Tela inicial do site com feed de fotos"
            />
            <Feed />
        </section>
    );
};

export default Home;
