import React, { useContext } from 'react';
import styles from './PhotoContent.module.css';
import { Link, useNavigate } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { userContext } from '../../userContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

// o photo single é refernte ao estilo da foto
const PhotoContent = ({ data, photoSingle }) => {
    //usuario logado
    const user = React.useContext(userContext);
    const { photo, comments } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/foto/${photo.id}`);
    };

    return (
        <div
            className={`${styles.photo} ${
                photoSingle ? styles.photoSingle : ''
            }`}>
            <div className={styles.img} onClick={handleClick}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author ? (
                            <PhotoDelete id={photo.id} />
                        ) : (
                            <Link to={`/perfil/${photo.author}`}>
                                @{photo.author}
                            </Link>
                        )}
                        <span className={styles.visualizacoes}>
                            {photo.acessos}
                        </span>
                    </p>
                    <h1 className="title">
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} Kg</li>
                        <li>
                            {photo.idade}
                            {photo.idade.length == 1 ? ' ano' : ' anos'}
                        </li>
                    </ul>
                </div>
            </div>
            <PhotoComments
                id={photo.id}
                comments={comments}
                photoSingle={photoSingle}
            />
        </div>
    );
};

export default PhotoContent;
