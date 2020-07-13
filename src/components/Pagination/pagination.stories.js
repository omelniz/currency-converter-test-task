import React from "react";
import Pagination from "./index";

export default {
  title: "UI/Pagination",
  component: Pagination,
};

export const firstPage = () => <Pagination page={1} total={10} />;
export const middlePage = () => <Pagination page={2} total={10} />;
export const lastPage = () => <Pagination page={10} total={10} />;
