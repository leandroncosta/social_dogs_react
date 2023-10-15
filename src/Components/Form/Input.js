import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, id, value, error, onChange, onBlur }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                required
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Input;
