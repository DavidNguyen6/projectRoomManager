const Book = require("../models/Book");
const Author = require("../models/Author");
const Room = require("../models/Room");
const Bill = require("../models/Bill");
const Customer = require("../models/Customer");
const Line = require("../models/LineRoom");

const mogoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getBookById: async id => await Book.findById(id),

  getAllAuthors: async () => await Author.find(),
  getAuthorById: async id => await Author.findById(id),

  getAllLine: async () => await Line.find(),
  
  getLineById: async id => await Line.findById(id),

  getAllRooms: async (condition = null) =>
    condition === null ? await Room.find() : await Room.find(condition),

  getRoomById: async id => await Room.findById(id),

  getAllCustomers: async (condition = null) =>
    condition === null ? await Customer.find() : await Customer.find(condition),

  getCustomerById: async id => await Customer.findById(id),

  getAllBills: async (condition = null) =>
    condition === null ? await Bill.find() : await Bill.find(condition),

  getBillById: async id => {
    await Bill.findById(id)
  },

  createAuthor: async args => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },

  createBook: async args => {
    const newBook = new Book(args);
    return await newBook.save();
  },

  CreateLine: async args => {
    const newLine = new Line(args);
    return await newLine.save();
  },

  createRoom: async args => {
    const newRoom = new Room(args);
    return await newRoom.save();
  },

  createCustomer: async args => {
    const newCustomer = new Customer(args);
    return await newCustomer.save();
  },

  createBill: async args => {
    const newBill = new Bill(args);
    return await newBill.save();
  },

  // deleteRoom: async (args, { id }) => {
  //   console.log("args", args);
  //   console.log("id", id);

  //   const wasDeleted = (await Recipe.deleteOne({ id: ID })).deleteCount;
  //   // _.remove(UserList, (user) => user.id === ID);
  //   return wasDeleted;
  // },
};

module.exports = mogoDataMethods;
