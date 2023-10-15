import React, { useContext } from 'react';
import styles from './UserHeadernav.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../userContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import Button from '../Form/Button';

const UserHeadernav = () => {
    const mobile = useMedia('(max-width: 40rem)');
    //verificar se o mobile menu esta aberto ou fechado
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { userLogout } = useContext(userContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    const handleLogout = () => {
        userLogout();
        navigate('/login');
    };

    // se mobile for true, vai ter um botao hamburguer
    return (
        <>
            {mobile && (
                <button
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    }`}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav}  ${
                    mobileMenu && styles.navMobileActive
                } `}>
                <NavLink to="/conta" end>
                    <MyPhotos />
                    {mobile && 'Minhas fotos'}
                </NavLink>
                <NavLink to="/conta/estatisticas">
                    <Stats />
                    {mobile && 'Estatisticas'}
                </NavLink>
                <NavLink to="/conta/postar">
                    <AddPhoto />
                    {mobile && 'Adicionar foto'}
                </NavLink>
                <button onClick={handleLogout}>
                    <Exit />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    );
};

export default UserHeadernav;
