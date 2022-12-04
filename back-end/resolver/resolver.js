// const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");
const Room = require("../models/Room");
const Customer = require("../models/Customer");
const LineRoom = require("../models/LineRoom");
const Account = require("../models/Account");
const CustomerRoom = require("../models/CustomerRoom");

const resolvers = {
  /* Start Query */
  Query: {
    books: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllBooks(),

    book: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getBookById(id),

    authors: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllAuthors(),

    author: async (parent, { id }, { mogoDataMethods }) => 
      await mogoDataMethods.getAuthorById(id),

    rooms: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllRooms(),

    room: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getRoomById(id),
  },

  //nếu muốn sự lý join các bản thì nên làm vd như Book có thêm thuôc tính của Author
  // Tìm sách dựa theo id
  Book: {
    author: async ({ authorId }, args, { mogoDataMethods }) => await mogoDataMethods.getAuthorById(authorId),
  },

  /*
    [
      {
        id: 1,
        name: "thanh Duy",
        age: 25,
        books: [
        {
          id: 1,
          name: 'De men phieu luu ky',
          genre: 'Adventure',
          authorId: 1
        },
        {
          id: 2,
          name: 'Lam giau khong kho',
          genre: 'Education',
          authorId: 2
        },
        ]
      }
    ]
  */
  Author: {
    books: async ({ id }, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllBooks({ authorId: id }),
  },

  /* End Query */

  /* Start MUTATION */
  Mutation: {
    createAuthor: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.createAuthor(args);
    },

    createBook: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.createBook(args);
    },

    createRoom: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.createRoom(args);
    },

    deleteRoom: async ({ id }, args, { mogoDataMethods }) => {
      return await mogoDataMethods.deleteRoom(id);
    },
  },
  /* End MUTATION */
};

module.exports = resolvers;
