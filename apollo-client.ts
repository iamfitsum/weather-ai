import { ApolloClient, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (!client) {
    client = new ApolloClient({
      uri: process.env.GRAPHQL_API_URL,
      cache: new InMemoryCache(),
      headers: {
        authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      },
    });
  }

  return client;
};
