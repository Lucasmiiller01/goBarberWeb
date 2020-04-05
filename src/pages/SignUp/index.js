import React from 'react';

import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBaber" />
            <form>
                <input placeholder="Nome Completo" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Seu senha" />
                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </form>
        </>
    );
}
