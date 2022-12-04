const Book = require('../models/Book');
const Author = require('../models/Author');
const Room = require('../models/Room');

const mogoDataMethods = {
  getAllBooks: async ( condition = null ) => condition === null ? await Book.find() : await Book.find(condition),
  getBookById: async id => await Book.findById(id),
  
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async id => await Author.findById(id),

  getAllRooms: async ( condition = null ) => condition === null ? await Room.find() : await Room.find(condition) ,
  getRoomById: async id => await Room.findById(id),

  createAuthor: async args => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },

  createBook: async args => {
    const newBook = new Book(args)
    return await newBook.save();
  },

  createRoom: async args => {
    const newRoom = new Room(args)
    return await newRoom.save();
  },

  deleteRoom: async (args, {id}) => {
    console.log("args", args);
    console.log("id", id);

    const wasDeleted = (await Recipe.deleteOne({id: ID})).deleteCount
    // _.remove(UserList, (user) => user.id === ID);
    return wasDeleted;
  }
}

module.exports = mogoDataMethods;
