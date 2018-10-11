import axios from 'axios';

const api = axios.create({
    baseURL: 'www.facebook.com',
    headers: {'ACESS_TOKEN': 23456789}
})

class CotacaoSeguroService {

    getInfo(cnpj) {
        return api.get(`/quote/${cnpj}`).then(response => response.data).catch(err => {
            if (err.response.status === 404) {
                throw 'Não foi possível encontrar as informações.';
            }
        });
    }

}

export default new CotacaoSeguroService();