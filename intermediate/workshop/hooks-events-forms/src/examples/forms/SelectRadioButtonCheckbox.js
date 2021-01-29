import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SelectRadioButtonCheckbox = () => {
  const [language, setlanguage] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const changeLanguage = (e) => {
    setlanguage(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeFood = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      // setInterests
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  return (
    <div>
      <Title>Select, radio button and checkbox</Title>
      <div>
        <label htmlFor="language">Favorite language:</label>
        <select name="language" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Rust">Rust</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div>
        <h2>Gender:</h2>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={changeGender}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={changeGender}
          />{" "}
          Female
        </label>
      </div>
      <div>
        <h2>Interests:</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="programming"
              value="programming"
              checked={interests.includes("programming")}
              onChange={changeFood}
            />{" "}
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              name="movies"
              value="movies"
              checked={interests.includes("movies")}
              onChange={changeFood}
            />{" "}
            Movies
          </label>
          <label>
            <input
              type="checkbox"
              name="boxing"
              value="boxing"
              checked={interests.includes("boxing")}
              onChange={changeFood}
            />{" "}
            Boxing
          </label>
        </div>
      </div>
      <hr />
      <div>
        <Title level={4}>{language}</Title>
        <Title level={4}>{gender}</Title>
        <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectRadioButtonCheckbox;
