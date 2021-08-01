const MOCHAPI_URL = `https://nori.ngrok.io/mochapi`;

function request(method, url, data) {
    let defaultHeaders = {};

    if (typeof data === 'string') {
        defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }

    const xhr = new XMLHttpRequest();
    const req = new Promise(function (resolve, reject) {
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.onabort = () => {
            reject({
                status: 'aborted'
            });
        };

        for (const key in defaultHeaders) {
            xhr.setRequestHeader(key, defaultHeaders[key]);
        }

        if ((method === 'POST' ||
            method === 'PUT' ||
            method === 'PATCH' ||
            method === 'DELETE') && data) {
            xhr.send(data);
        } else {
            xhr.send();
        }
    });

    return req;
}


class UserService {
    async fetchUser(id) {
        // const res = await got(`${MOCHAPI_URL}/user${id ? '/' + id : ''}`);
        const res = await request('GET', `${MOCHAPI_URL}/user${id ? '/' + id : ''}`);

        return JSON.parse(res);
    }

    /*async updateUser(id, data) {
    let res;

    try {
        res = await got.put(`${MOCHAPI_URL}/user/${id}`, {
            json: data,
            responseType: 'json'
        });
    } catch (e) {
        console.log(e);
    }

        return res.body;
    }*/
}

class MochibuxService {
    async fetchMochibux(id) {
        const res = await request('GET', `${MOCHAPI_URL}/mochibux${id ? '/' + id : ''}`);

        return JSON.parse(res);
    }

    /*async updateMochibux(id, data) {
        const res = await got.put(`${MOCHAPI_URL}/mochibux/${id}`, {
            json: data,
            responseType: 'json'
        });

        return res.body;   
    }*/
}

/*class WisdomService {
    async fetchWisdoms() {
        const res = await got(`${MOCHAPI_URL}/wisdom`);

        return JSON.parse(res.body);
    }
}

class PingService {
    async fetchPings() {
        const res = await got(`${MOCHAPI_URL}/ping`);

        return JSON.parse(res.body);
    }
}*/

module.exports = {
    user: new UserService(),
    mochibux: new MochibuxService()//,
    //wisdom: new WisdomService(),
    //ping: new PingService()
}
