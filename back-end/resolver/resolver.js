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

    bills: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllBills(),

    bill: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getBillById(id),

    rooms: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllRooms(),

    room: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getRoomById(id),

    lines: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllLine(),

    line: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getLineById(id),

    customers: async (parent, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAllCustomers(),

    customer: async (parent, { id }, { mogoDataMethods }) =>
      await mogoDataMethods.getCustomerById(id),
  },

  //nếu muốn sự lý join các bản thì nên làm vd như Book có thêm thuôc tính của Author
  // Tìm sách dựa theo id
  Book: {
    author: async ({ authorId }, args, { mogoDataMethods }) =>
      await mogoDataMethods.getAuthorById(authorId),
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

  Room: {
    line: async ({ lineId }, args, { mogoDataMethods }) =>
      await mogoDataMethods.getLineById(lineId),
  },

  Bill: {
    room: async ({ roomId }, args, { mogoDataMethods }) =>
      await mogoDataMethods.getRoomById(roomId),
    
    customer: async ({ customerId }, args, { mogoDataMethods }) =>
      await mogoDataMethods.getCustomerById(customerId)
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

    createLine: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.CreateLine(args);
    },

    createBill: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.createBill(args);
    },

    createCustomer: async (parent, args, { mogoDataMethods }) => {
      return await mogoDataMethods.createCustomer(args);
    },

    // deleteRoom: async ({ id }, args, { mogoDataMethods }) => {
    //   return await mogoDataMethods.deleteRoom(id);
    // },
  },
  /* End MUTATION */
};

module.exports = resolvers;
