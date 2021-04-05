import axios from 'axios';

const apiVtex = axios.create({
  baseURL: 'https://cosmetics2.vtexcommercestable.com.br/api/',
  headers: {
    // can be common or any other method
    "X-VTEX-API-AppKey": 'vtexappkey-cosmetics2-XDWXAV',
    "X-VTEX-API-AppToken": 'VQKIIBUVOFDBIDLKZPOWSKETDYWCMJSACDVXWFCJVSKXGYVBBVISZRJLLQEKERJEMDYEINOUMFAZZGNEDVBQBABLUKLFBSEEIGLCAQTOGOGURKLFCAHJQTDMBNKYBIST'
}
});

export default apiVtex;