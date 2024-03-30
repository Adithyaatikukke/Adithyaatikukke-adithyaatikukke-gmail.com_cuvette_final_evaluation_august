import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
const Footer = ({ showFooterForMobile }) => {
  return (
    <section
      className={`${
        showFooterForMobile === "no"
          ? style.footer_container_off
          : style.footer_container_on
      }`}
    >
      <span>Musicart | All rights reserved</span>
    </section>
  );
};

export default Footer;
