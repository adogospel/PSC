import { Outlet } from "react-router";

import Logo from "@/components/common/Logo";

export default function AuthLayout() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-10">
      <div className="halo -top-32 -left-32" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <Outlet />
      </div>
    </main>
  );
}
