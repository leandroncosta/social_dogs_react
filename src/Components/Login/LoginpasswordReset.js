import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginpasswordReset = () => {
    const navigate = useNavigate();
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = useForm();
    const { loading, error, request } = useFetch();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pKey = params.get('key');
        const pLogin = params.get('login');
        console.log(key, login);

        if (pKey) setKey(pKey);
        if (pLogin) setLogin(pLogin);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        //so vai execuar esses cod caso tenha definido uma senha e seja validada
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);

            if (response.ok) navigate('/login');
        }
    };

    return (
        <section className="animeLeft">
            <Head title="Resetar senha" description="" />

            <h1 className="title">Resete a senha</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova senha"
                    type="password"
                    name="password"
                    id="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>
            <Error error={error} />
        </section>
    );
};

export default LoginpasswordReset;
