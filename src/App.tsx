import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import CountryPage from "./pages/CountryPage";
import ListPage from "./pages/ListPage";
import CasinosPage from "./pages/CasinosPage";
import CasinoReviewPage from "./pages/CasinoReviewPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/pais/:codigo" element={<CountryPage />} />
            <Route path="/paises" element={<ListPage />} />
            <Route path="/casinos" element={<CasinosPage />} />
            <Route path="/apuestas" element={<ListPage />} />
            <Route path="/bonos" element={<ListPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
