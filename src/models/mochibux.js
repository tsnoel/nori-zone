import api from '../handlers/mochAPI';

class Mochibux {

    constructor() {
        this.data = [];
    }

    async loadData() {
        try {
        this.data = await api.mochibux.fetchMochibux();
    } catch (e) {
        console.log(e);
        return;
    }
    }
}

const mochibux = new Mochibux();

export default mochibux;
