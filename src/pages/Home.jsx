import React, { useState } from "react";
import Unduh from "../components/Input";

const Home = () => {
  const [video, setVideo] = useState([]);
  const [checkedLink, setCheckedLink] = useState(""); // State to store the checked link

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
          setVideo(res);
        });
      })
      .catch((error) => console.log(error));
  };

  const check = (e) => {
    setCheckedLink((prevLink) => (prevLink === e ? "" : e));
  };

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
              {video.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    value={item.link}
                    checked={checkedLink === item.link}
                    onChange={() => check(item.link)}
                  />
                  <label>{item.quality}</label>
                </div>
              ))}
            </div>
          </div>
          {checkedLink?  <a href={checkedLink} className="download" target="_blank" rel="noreferrer">
            unduh
          </a> : null}
        </div>
      </div>
    </>
  );
};

export default Home;
