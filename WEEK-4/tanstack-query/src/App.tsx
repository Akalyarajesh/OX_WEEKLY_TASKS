import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
