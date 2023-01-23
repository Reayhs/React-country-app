import React from "react";

function List({ data }) {
  return (
    <div className="box">
      <h1>{data.name.common}</h1>
      <h3>
        {" "}
        <strong>Capital:</strong> {data.capital} {!data.capital && "Undefined"}
      </h3>
      <img src={data.flags.png} alt="" />
      <h3>{data.continents}</h3>
    </div>
  );
}

export default List;
