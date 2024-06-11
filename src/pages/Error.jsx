import React from "react";
import errorImg from "../assets/images/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="errorPage">
        <img src={errorImg} alt="" />
        <h1>Maaf, halaman yang anda cari tidak ada!</h1>
        <p>kembali ke  
          <Link to="/" > halaman utama</Link>
        </p>
      </div>
    </>
  );
};

export default Error;
