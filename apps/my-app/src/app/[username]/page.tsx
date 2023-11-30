import { Sidebar } from "@repo/ui";
import React from "react";

type params = {
  params: {
    username: String;
  };
};
export default function DashboardPage({ params: { username } }: params) {
  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
}
