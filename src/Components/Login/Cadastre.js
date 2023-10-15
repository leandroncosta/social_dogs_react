import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { userContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const Cadastre = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();
    const { userLogin } = React.useContext(userContext);
    const { error, loading, request } = useFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });

        const { response, json } = await request(url, options);
        console.log(response, json);
        if (response.ok) {
            userLogin(username.value, password.value);
        }
    };

    return (
        <section className="animeLeft">
            <Head title="Cadastro" description="Tela de cadastro do site" />
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    id="username"
                    {...username}
                />
                <Input label="E-mail" type="email" id="email" {...email} />
                <Input
                    label="Senha"
                    type="password"
                    id="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Cadastrando</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}

                <Error error={error} />
            </form>
        </section>
    );
};

export default Cadastre;
