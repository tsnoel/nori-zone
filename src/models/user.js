import api from '../handlers/mochAPI';

class User {

    constructor() {
        this.all = [];
        this.current = {};
    }

    async loadData() {
        try {
            this.all = await api.user.fetchUser();
        } catch (e) {
            console.log(e);
            return;
        }
    }
}

const user = new User();

export default user;
