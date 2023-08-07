import { _api } from '../http/http'

export default class CharacterService {
    // static async createCharacter(name, image, element) {
    //     return _api.post('/api/createCharacter', {name, image, element});
    // }

    // static async updateCharacter(name, element, oldImage, id, image) {
    //     return _api.put('/api/character', {name, element, oldImage, id, image})
    // }

    // static async getOneCharacter(id) {
    //     const config = {
    //         heades:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         params:{
    //             id
    //         },
    //     }
    //     return _api.get('/api/character', config);
    // }
    static async getCharacters() {
        return _api.get('/api/characters');
    }
    // static async deleteCharacter(id, oldImage) { 
    //     return _api.post('/api/deleteCharacter', {id, oldImage})
    // }
}