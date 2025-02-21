import { Outlet } from "@remix-run/react";

export default function ContactLayout() {
  return (
    <div id="contact">
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
}
