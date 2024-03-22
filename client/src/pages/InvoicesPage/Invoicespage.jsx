import React from "react";
import HeaderPage from "../headerPage/headerPage";
import SearchHeader from "../../components/Serachheader/SearchHeader";
import Invoices from "../../components/Invoices/Invoices";
import FooterPage from "../FooterPage/FooterPage";
import Nav from "../../components/Nav/Nav";

const Invoicespage = () => {
  return (
    <>
      <HeaderPage />
      <SearchHeader />
      <Invoices />
      <FooterPage />
      <Nav />
    </>
  );
};

export default Invoicespage;
