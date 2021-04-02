const models = require('./models')
const book = require('./models/book')


// get all authors from Chicago

// const chicagoAuthors = async ()=> {
//     const chicago = await models.hometown.findOne({
//         where: {
//             name: 'Chicago, Illinois'
//         }
//     })
//     const authors = await chicago.getAuthors()
// }
// chicagoAuthors()

// // get Stephen King's hometown

// const stevesTown = async () => {
//     const steve = await models.author.findOne({
//         where: {
//             name: 'Stephen King'
//         }
//     })
//     const town = await steve.getHometown()
// }
// stevesTown()

// get all books by Mark Lutz

// const lutzBooks = async () => {
//     const mark = await models.author.findOne({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })
//     const books = await mark.getBooks()

//     console.log(books);
// }
// lutzBooks()

// get the author of Little Women

// const littleWomen = async () => {
//     const book = await models.book.findOne({
//         where: {
//             title: 'Little Women'
//         }
//     })
//     const author = await book.getAuthor()

//     console.log(author);
// }
// littleWomen()

// get all books in the Childrens Books subject

// Get the subject of the 2001 Space Oddyssey

const space = async () => {
    const book = await models.book.findOne({
        where: {
            title: '2001: A Space Odyssey'
        }
    })
    console.log(book);
    const subject = await book.getSubject()
    console.log(subject);
}
space()

// get all subjects that Mark Lutz has written on

// get all authors that have written books in the Childrens Books subject
