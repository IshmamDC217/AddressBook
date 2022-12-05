import axios from 'axios';

export class AddressService {
    static serverURL = 'http://localhost:9000';

    static getALLAddresses(){
        let dataURL = `${this.serverURL}/addresses`;
        return axios.get(dataURL);
    }
}