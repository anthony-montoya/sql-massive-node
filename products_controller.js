module.exports = {
    
    create: (request, response, next) => {
        const db = request.app.get('db');
        let { name, description, price, imageurl } = request.body;
        
        db.create_product([name, description, price, imageurl]).then( () => {
            response.status(200).send('Product was created successfully.')     
        }).catch( () => response.status(500).send('Internal Server Error') );
    },

    getOne: (request, response, next) => {
        const db = request.app.get('db');

        db.read_product(request.params.id).then( product => {
            response.status(200).send(product)    
        }).catch( () => response.status(500).send('Internal Server Error') );
    },

    getAll: (request, response, next) => {
        const db = request.app.get('db');

        db.read_products().then( (products) => {
            response.status(200).send(products)   
        }).catch( () => response.status(500).send('Internal Server Error') );
    },

    update: (request, response, next) => {
        const db = request.app.get('db');
        let { params, query } = request

        db.update_product([params.id, query.desc]).then( () => {
            response.status(200).send('Product has been successfully updated.')       
        }).catch( () => response.status(500).send('Internal Server Error') );
    },

    delete: (request, response, next) => {
        const db = request.app.get('db');

        db.delete_product(request.params.id).then( () => {
            response.status(200).send('Product has been successfully deleted') 
        }).catch( () => response.status(500).send('Internal Server Error') );
    }
}