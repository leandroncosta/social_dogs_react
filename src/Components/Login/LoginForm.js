import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import { userContext } from '../../userContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const { userLogin, loading, error } = React.useContext(userContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(username, password);
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    };

    return (
        <form className={`${styles.form} animeLeft`} onSubmit={handleSubmit}>
            <h1 className="title">Login</h1>
            <Input label="Usuário" type="text" id="user" {...username} />
            <Input label="Senha" type="password" id="password" {...password} />
            {loading ? (
                <Button disabled>Entrar</Button>
            ) : (
                <Button>Entrar</Button>
            )}
            <Error error={error && 'Dados incorretos'} />
            <Link className={styles.perdeu} to="/login/perdeu">
                Esqueceu a senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta?</p>
                <Link className={stylesBtn.button} to="/login/criar">
                    Cadastro
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
