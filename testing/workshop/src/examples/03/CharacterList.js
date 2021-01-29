import React from "react";

const data = [
  {
    name: "John Tsevdos",
    gender: "male",
  },
  {
    name: "Patricia Lebsack",
    gender: "female",
  },
  {
    name: "Dennis Schulist",
    gender: "male",
  },
];

const CharacterList = ({
  onSelect = () => {
    console.log("click");
  },
}) => (
  <div>
    <h1>My title</h1>
    <hr />
    <div>
      {Boolean(data.length) &&
        data.map(({ name, gender }) => (
          <div className="entry" key={name}>
            <h2>{name}</h2>
            <p>{gender}</p>
            <button type="primary" onClick={onSelect}>
              edit {name}
            </button>
          </div>
        ))}
    </div>
  </div>
);

export default CharacterList;
