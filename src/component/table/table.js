import React from "react";

const table = (props) => {
  console.log(props);
  const { starwar } = props;
  const mapData = starwar.map((data, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.height}</td>
        <td>{data.Mess}</td>
        <td>{data.hair_color}</td>
        <td>{data.skin_color}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">height</th>
            <th scope="col">mass</th>
            <th scope="col">hair color</th>
            <th scope="col">skin color</th>
          </tr>
        </thead>
        <tbody>{mapData}</tbody>
      </table>
    </div>
  );
};

export default table;
