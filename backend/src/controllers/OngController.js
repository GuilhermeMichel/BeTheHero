const generateUniqueId = require('../util/generateUniqueid');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
      const ongs = await connection('ongs').select('*');
           
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, watsapp, uf } = request.body;

    const id = generateUniqueId();
   
        await connection('ongs').insert({
            id,
            name,
            email,
            watsapp,
            
            uf,
   })
   

    return response.json({id})


    ;

    }
};