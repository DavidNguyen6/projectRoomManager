import { ApolloClient, InMemoryCache } from '@apollo/client';
const REACT_APP_GRAPHQL_API_URL = 'http://localhost:4000/graphql';

export const apolloClient = new ApolloClient({
	uri: REACT_APP_GRAPHQL_API_URL,
	cache: new InMemoryCache()
});