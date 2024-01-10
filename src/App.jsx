import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <h1>Adopt Me!</h1>
    <Routes>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/" element={<SearchParams />}></Route>
    </Routes>
  </QueryClientProvider>
  </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
