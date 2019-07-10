export default class CoffeeService {
    constructor() {
        this._apiBase = 'http://localhost:3000'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    }

    getBestsellersItems = async () => {
        const res = await this.getResource('/bestsellers'); 

        return res;
    }

    getCoffeeItems = async () => {
        const res = await this.getResource('/coffee'); 

        return res;
    }

    getGoodsItems = async () => {
        const res = await this.getResource('/goods'); 

        return res;
    }
}