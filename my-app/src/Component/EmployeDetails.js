import React, { useState } from "react";

function EmployeDetails() {
  const list = [
    {
      employeId: 1,
      employeName: "Shireesha",
      company: "BlueSilicaTechnology",
      designation: "UI Develaper",
    },
    {
      employeId: 2,
      employeName: "Saroja",
      company: "Alfreds Futterkiste ",
      designation: "HTML Develaper",
    },
    {
      employeId: 3,
      employeName: "MaheshReddy",
      company: "Alfreds Futterkiste ",
      designation: "Reactjs Develaper",
    },
    {
      employeId: 4,
      employeName: "Adhil",
      company: "Maria Anders ",
      designation: "Nodejs Develaper",
    },
  ];

  //const [employee, setEmployee] = useState(list);

  return (
    <div>
      {/* {list.map((value, employeId) => (
        <li style={{ listStyleType: "none" }} key={value.employeId}>
          {value.employeId} {value.employeName} {value.designation}{" "}
          {value.company}
        </li>
      ))} */}
      <table>
        <tr>
          <th>EmployeId</th>
          <th>EmployeName</th>
          <th>Company</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>
            {list.map((value, employeId) => (
              <li style={{ listStyleType: "none" }} key={value.employeId}>
                {value.employeId}
              </li>
            ))}
          </td>
          <td>
            {list.map((value, employeId) => (
              <li style={{ listStyleType: "none" }} key={value.employeId}>
                {value.employeName}
              </li>
            ))}
          </td>
          <td>
            {list.map((value, employeId) => (
              <li style={{ listStyleType: "none" }} key={value.employeId}>
                {value.company}
              </li>
            ))}
          </td>
          <td>
            {list.map((value, employeId) => (
              <li style={{ listStyleType: "none" }} key={value.employeId}>
                {value.designation}
              </li>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EmployeDetails;
