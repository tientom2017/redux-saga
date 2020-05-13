import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(res) {
        return res;
    }

    handleError(err) {
        return err;
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, body) {
        return this.instance.post(url, body);
    }

    put(url, body) {
        return this.instance.put(url, body);
    }

    delete(url) {
        return this.instance.delete(url);
    }
}

export default new AxiosService;
