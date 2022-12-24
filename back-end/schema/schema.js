const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  type Bill {
    id: ID
    electricNumberNew: Int
    electricNumberOld: Int
    waterNumberNew: Int
    waterNumberOld: Int
    totalPrice: Float
    date: String
    customer: Customer
    room: Room
  }

  type Room {
    id: ID
    nameRoom: String
    roomCode: String
    categoryRoom: String
    line: Line
    priceRoom: Int
    statusRoom: Boolean
  }

  type Customer {
    id: ID
    username: String
    password: String
    phone: Int
    identityNumber: Int
    address: String
    startContract: String
  }

  type Line {
    id: ID
    lineName: String
  }

  # Root type gốc của sơ đồ
  type Query {
    books: [Book]
    book(id: ID!): Book

    authors: [Author]
    author(id: ID!): Author

    lines: [Line]
    line(id: ID!): Line

    rooms: [Room]
    room(id: ID!): Room

    customers: [Customer]
    customer(id: ID!): Customer

    bills: [Bill]
    bill(id: ID!): Bill
  }

  # Ghi dự liệu vào data
  type Mutation {
    createAuthor(id: ID!, name: String, age: Int): Author

    createBook(name: String, genre: String, authorId: ID!): Book

    createLine(lineName: String, id: ID!): Line

    createRoom(
      id: ID!
      nameRoom: String
      roomCode: String
      priceRoom: Int
      categoryRoom: String
      statusRoom: Boolean
      lineId: ID!
    ): Room

    createCustomer(
      username: String
      password: String
      phone: Int
      identityNumber: Int
      address: String
      startContract: String
      id: ID!
    ): Customer

    createBill(
      electricNumberOld: Int
      electricNumberNew: Int
      waterNumberNew: Int
      waterNumberOld: Int
      totalPrice: Float
      date: String
      customerId: String
      roomId: String
      id: ID!
    ): Bill
  }
`;
module.exports = typeDefs;
