import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import DisplayData from "./DisplayData";

function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://countries.trevorblades.com",
    }),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
