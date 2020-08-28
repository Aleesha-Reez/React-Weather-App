import React, { useState } from "react";
import axios from "axios";
import Cities from "./Cities";
import { Row, Col } from "reactstrap";

export default function CountryList() {
  const [cities, setCities] = useState(null);
  const countryData = [
    {
      lat: -34,
      lon: -64,
      name: "Argentina",
    },

    {
      lat: 5.2,
      lon: -3.74,
      name: "France",
    },

    {
      lat: 51.5,
      lon: 10.5,
      name: "Germany",
    },

    {
      lat: 32.18,
      lon: -96.88,
      name: "Italy",
    },

    {
      lat: 40,
      lon: -4,
      name: "Spain",
    },
  ];
  async function fetchCityWeather(lon, lat) {
    const res = await axios.post(
      `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=30&appid=9a6f2e544e3a8ce2e1271032a1ec02f8&units=metric`
    );

    const citiesData = res.data.list;
    setCities(citiesData);
  }

  return (
    <Row className="allCenter align-items-md-start">
      <Col md="2">
        <div className="countryList allCenter flex-md-column flex-sm-row flex-column mx-md-0 fixed">
          {countryData &&
            countryData.map((country, index) => (
              <span
                key={index}
                className="eachCountry my-3 mx-md-0 mx-4 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  fetchCityWeather(country.lon, country.lat);
                }}
              >
                {country.name}
              </span>
            ))}
        </div>
      </Col>

      {/* Render Each City */}
      <Col xs="10">
        <Cities cities={cities} />
      </Col>
    </Row>
  );
}
