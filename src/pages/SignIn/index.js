import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBaber" />
            <Form onSubmit={handleSubmit} schema={schema}>
                <Input type="email" name="email" placeholder="Seu e-mail" />
                <Input
                    type="password"
                    name="password"
                    placeholder="Seu senha"
                />
                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
