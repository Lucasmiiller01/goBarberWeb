import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const response = yield call(api.post, '/sessions', {
            email,
            password,
        });
        const { token, user } = response.data;
        if (!user.provider) {
            toast.error('Usuário não é o prestador');
            return;
        }
        yield put(signInSuccess(token, user));
        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha na autenticacão, verifique seus dados.');
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
