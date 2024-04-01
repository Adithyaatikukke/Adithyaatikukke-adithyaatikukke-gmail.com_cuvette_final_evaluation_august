import React, { useState } from "react";
import style from "./SearchHeader.module.css";
import { IoSearchOutline } from "react-icons/io5";
import {
  getAllProductsAsync,
  getAllProductsByKeywordFilterAsync,
} from "../../Redux/Product/ProductSlice";
import { useDispatch } from "react-redux";

const SearchHeader = () => {
  const dispatch = useDispatch();
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const handleSetInputvalue = (value) => {
    if (value) {
      setInputValue(value);
      setShowPlaceHolder(false);

      dispatch(getAllProductsByKeywordFilterAsync(value));
    } else {
      dispatch(getAllProductsAsync());
    }
  };
  return (
    <section className={style.search_container}>
      <div
        onClick={() => setShowPlaceHolder(false)}
        onMouseEnter={() => setShowPlaceHolder(false)}
        onMouseLeave={() => setShowPlaceHolder(inputValue ? false : true)}
        className={style.search_section}
      >
        <input
          onChange={(e) => handleSetInputvalue(e.target.value)}
          type="text"
        />
        {showPlaceHolder && (
          <span>
            <IoSearchOutline size={20} /> Search Musicart
          </span>
        )}
      </div>
    </section>
  );
};

export default SearchHeader;
