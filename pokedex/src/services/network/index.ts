import Api from '../api';

class Network{
    getPokemonList = async(page:number)=>{
        const offset = (page * 20) - 20;
        try {
            const response = await Api.get(`pokemon?offset=${offset}`);
            return response?.data;
        } catch (error) {
            return null
        }
    }

    getPokemonById = async(id:number)=>{
        try {
            const response = await Api.get(`pokemon/${id}`)
            return response?.data;
        } catch (error) {
            return null;
        }
    }

    getPokemonEvolutions = async(id:number)=>{
        try {
            const response = await Api.get(`revolution-chain/${id}`)
            return response?.data;
        } catch (error) {
            return null;
        }
    }
}

export default new Network();