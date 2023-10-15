import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true);

    //essa funcao da img so e desparada quando ela carrega completamente
    const handleLoad = ({ target }) => {
        setSkeleton(false);
        target.style.opacity = 1;
    };

    return (
        <figure className={styles.wrapper}>
            {skeleton && <div className={styles.skeleton}></div>}
            <img
                onLoad={handleLoad}
                className={styles.img}
                alt={alt}
                {...props}
            />
        </figure>
    );
};

export default Image;
