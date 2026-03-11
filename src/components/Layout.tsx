import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import { useCountry } from "@/hooks/useCountry";

export default function Layout() {
  const { selected, selectByCode, countries } = useCountry();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet context={{ selected, selectByCode, countries }} />
      </main>
      <Footer />
    </div>
  );
}
