import React from 'react';
import styles from './UserHeader.module.css';
import UserHeadernav from './UserHeadernav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        const { pathname } = location;
        // const index = location.pathname.lastIndexOf('/');
        // const currentTitle = location.pathname.slice(index + 1);
        // setTitle(currentTitle);

        switch (pathname) {
            case '/conta/estatisticas':
                setTitle('Estatísticas');
                break;
            case '/conta/postar':
                setTitle('Poste sua foto');
                break;
            default:
                setTitle('Minha conta');
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeadernav />
        </header>
    );
};

export default UserHeader;
