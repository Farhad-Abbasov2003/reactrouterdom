import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BsMoon, BsSearch,BsChevronDown } from "react-icons/bs";
import './Style.css'

const Home2 = () => {
  const [veri, setVeri] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setVeri(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="ust">
        <nav>
          <div className="left">Where in the world?</div>
          <div className="right">
            <BsMoon /> Dark Mode
          </div>
        </nav>
        <div className="input">
          <BsSearch className="icon-search" />
          <input
            type="text"
            value={name}
            onChange={(x) => setName(x.target.value)}
            placeholder="Search for a country..."
          />

          <input
          className="input-filter"
            type="text"
            value={name}
            onChange={(x) => setName(x.target.value)}
            placeholder="Filter By Region"
          />
          <BsChevronDown className="icon-down"/>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#fafafa",
          justifyContent:'center'
        }}
      >
        {veri.map((x) => (
          <div
            class="card"
            style={{ width: "20rem", marginLeft: "3rem", marginTop: "5rem" }}
          >
            <img src={x.flags.png} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{x.altSpellings}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Population: {x.population}</li>
              <li class="list-group-item">Region: {x.region}</li>
              <li class="list-group-item">Capital: {x.capital}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home2;
