import React, { useState, useEffect } from "react";
import Unduh from "../components/Input";

const Home = () => {
  const [quality, setQuality] = useState([]);

  const handleSubmit = (link) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: link,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API_URL, requestOptions)
        .then((response) => {
          response.json().then((res) => {
            setQuality(res);
          });
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    quality.forEach(item => {
      console.log(item.quality);
    });
  }, [quality]);

  return (
      <>
        <div className="home">
          <Unduh handleSubmit={(e) => handleSubmit(e)} />
          <div className="home-download">
            <div className="drop-menu">
              <a href="" className="dropdown">
                dropdown
              </a>
              <div className="drop-items">
                {quality.map((item, index) => (
                    <div key={index}></div>
                ))}
              </div>
            </div>
            <a href="#" className="download" target="_blank" rel="noreferrer">
              unduh
            </a>
          </div>
        </div>
      </>
  );
};

export default Home;