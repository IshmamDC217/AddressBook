import axios from 'axios';

export class AddressService {
    static serverURL = `http://localhost:9000`;

    static getALLAddresses(){
        //console.log(this.serverURL);
        let dataURL = `${this.serverURL}/addresses`;
        return axios.get(dataURL);
    }

    static getAddress(addressId){
        let dataURL = `${this.serverURL}/addresses/${addressId}`;
        return axios.get(dataURL);
    }

    static getGroups(){
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(address){
        let groupID = address.groupID
        let dataURL = `${this.serverURL}/groups/${groupID}`;
        return axios.get(dataURL);
    }
}
