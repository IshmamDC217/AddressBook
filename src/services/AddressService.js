import axios from 'axios';

export class AddressService {
    static serverURL = `http://localhost:9000`;

    static getALLAddresses(){
        console.log(this.serverURL);
        let dataURL = `${this.serverURL}/addresses`;
        return axios.get(dataURL);
    }
}

// const instance = axios.create({
//     baseURL: "http://localhost:9000",
// });

// export default instance;