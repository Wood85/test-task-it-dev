import { ApolloClient, InMemoryCache } from '@apollo/client';

// const authLink = new ApolloLink((operation, forward) => {
//   const accessToken = JSON.parse(localStorage.getItem('tokenData') || '');

//   operation.setContext(({ headers }: { headers: Headers }) => ({
//     headers: {
//       ...headers,
//       authorization: `Bearer ${accessToken}`,
//     },
//   }))

//   return forward(operation)
// })
// const httpLink = new HttpLink({
//     uri: prodURI,
// });


const client = new ApolloClient({
	uri: 'https://api.escuelajs.co/graphql',
	cache: new InMemoryCache()
});

export default client;
