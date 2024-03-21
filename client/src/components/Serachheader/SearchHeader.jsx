import React from "react";
import style from "./SearchHeader.module.css";
import { IoSearchOutline } from "react-icons/io5";
const SearchHeader = () => {
  return (
    <section className={style.search_container}>
      <div className={style.search_section}>
        <input type="text" />
        <span>
          <IoSearchOutline size={20} /> Search Musicart
        </span>
      </div>
    </section>
  );
};

export default SearchHeader;
