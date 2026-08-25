import { Outlet } from "react-router";

import Footer from "@/components/layout/Footer";

import Header from "@/components/layout/Header";

export default function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
