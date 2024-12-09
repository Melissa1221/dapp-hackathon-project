import { Outlet } from "@remix-run/react";
import { MainLayout } from "~/components/layouts/MainLayout";

export default function HomeRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}