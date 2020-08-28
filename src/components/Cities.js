import React from "react";
import { Row } from "reactstrap";
import { FiSun } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";

export default function Cities({ cities }) {
  return (
    <Row className="d-flex justify-content-center flex-wrap">
      {cities &&
        cities.map((city, index) => (
          <div
            className="eachCity m-3 p-3 allCenter flex-column  justify-content-between"
            key={index}
          >
            <h4 className="m-0">{city.name}</h4>
            <div className="allCenter">
              <p className="m-0 mr-1">Current Temperature:</p>
              <span className="cityTemperature allCenter rounded-circle mr-1">
                {Math.round(city.main.temp)}
              </span>
              {Math.round(city.main.temp) > 20 && <FiSun className="hotIcon" />}
              {Math.round(city.main.temp) < 20 && (
                <FaRegSnowflake className="coldIcon" />
              )}
            </div>
          </div>
        ))}
    </Row>
  );
}
