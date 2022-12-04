const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
		author: [Author]
	}

	type Author {
		id: ID
		name: String
		age: Int
		books: [Book]
	}

	type Room {
		id: ID
		nameRoom: String
		roomCode: String
		categoryRoom: String
		lineId: Int
		priceRoom: Float
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

	# Root type gốc của sơ đồ
	type Query {
		books: [Book]
		book(id: ID!): Book

		authors: [Author]
		author(id: ID!): Author

		rooms: [Room]
		room(id: ID!): Room

		customers: [Customer]
		customer(id: ID!): Customer
	}

	# Ghi dự liệu vào data
	type Mutation {
		createAuthor( id: ID!, name: String, age: Int ) : Author

		createBook( name: String, genre: String, authorId: ID! ) : Book

		createRoom( id: ID!, nameRoom: String, roomCode: String, categoryRoom: String, lineId: Int, priceRoom: String, statusRoom: Boolean ) : Room
		deleteRoom(id: ID!) : Room

		createCustomer( username: String, password: String, phone: Int, identityNumber: Int, address: String, startContract: String, id: ID!) : Customer
	}
`;
module.exports = typeDefs;
