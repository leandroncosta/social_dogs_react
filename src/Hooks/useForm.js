import React from 'react';

const validationTypes = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha com um e-mail válido',
    },
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Preencha um cep válido',
    },
    phone: {
        regex: /^[0-9]{2}-?[0-9]{5}-?[0-9]{4}$/,
        message: 'Preencha um número válido',
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z] {8,}$/,
        message:
            'A senha deve conter no mínimo 8 caracteres, um dígito, uma letra minuscula, uma letra maiuscula',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas',
    },
};

// o recebendo o tipo de input afim de validacoes com meu objeto acima validationtypes
const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    // value se trata do value do input atual
    const validate = (value) => {
        if (type === false) return true; // verificacao para campos q nao precisa de validacao, ex: input de nome,  caso for um desse n vai ter as verificacoes abaixo

        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if (
            // se o tipo de input existir, vai fazer o match com regex correspondente, se n der match vai setar o valor de erro usando a mensagem correspondente
            validationTypes[type] &&
            !validationTypes[type].regex.test(value)
        ) {
            setError(validationTypes[type].message);
            return false;
        } else {
            // se nao for nulo e passou do regex match vc vai setar o error como nada
            setError(null);
            return true;
        }
    };

    // evento a cada mudanca no input
    const onChange = ({ target }) => {
        // validate(target.value);]

        //assim vai validar a cada digito só apos ter errado uma vez]
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};

export default useForm;
