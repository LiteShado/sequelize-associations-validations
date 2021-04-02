const models = require('./models')




models.author.findAll().then(res => console.log(res))


const chicagoAuthors = async ()=> {
    const chicago = await models.hometown.findOne({
        where: {
            name: 'Chicago, Illinois'
        }
    })
    const authors = await chicago.getAuthors()
}
chicagoAuthors()
