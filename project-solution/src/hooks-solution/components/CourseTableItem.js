import React from "react";
import { Link } from "react-router-dom";

const CourseTableItem = ({ id, title, open, price, dates }) => {
  const { normal } = price;
  const { start_date: startDate, end_date: endDate } = dates;
  const startDateFormatted = new Date(startDate).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(endDate).toLocaleDateString("el-gr");

  return (
    <tr>
      <td>ℹ</td>
      <td>{title}</td>
      <td>{open ? "✔" : "✖"}</td>
      <td>{normal} €</td>
      <td>
        {startDateFormatted} - {endDateFormatted}
      </td>
      <td className="has-text-right">
        <Link to={`/courses/${id}`} className="btn btn-info btn-xs pull-right">
          View details
        </Link>
      </td>
    </tr>
  );
};

export default CourseTableItem;
