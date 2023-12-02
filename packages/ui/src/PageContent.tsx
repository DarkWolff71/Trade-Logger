import React from "react";
import { PageTitle } from "./PageTitle";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function PageContent({ title, children }: Props) {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <PageTitle>{title}</PageTitle>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min-h-[80vh]">
          {children}
        </div>
      </div>
    </>
  );
}
