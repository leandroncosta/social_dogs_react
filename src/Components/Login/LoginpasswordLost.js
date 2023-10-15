import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginpasswordLost = () => {
    // const email = useForm();
    const login = useForm();
    console.log(login);
    const { data, loading, error, request } = useFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (login.validate()) {
            const { url, options } = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar'),
            });
            const { json } = await request(url, options);
            console.log(json);
        }
    };

    return (
        <section className="animeLeft">
            <Head title="Esqueci minha senha" description="" />

            <h1 className="title">Perdeu a senha</h1>
            {data ? (
                <p style={{ color: '#4c1' }}>{data}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input
                        label="E-mail / Usuário"
                        type="text"
                        name="email"
                        id="email"
                        {...login}
                    />

                    {loading ? (
                        <Button disabled>Enviando e-mail..</Button>
                    ) : (
                        <Button>Enviar e-mail</Button>
                    )}
                </form>
            )}
            <Error error={error} />
        </section>
    );
};

export default LoginpasswordLost;
