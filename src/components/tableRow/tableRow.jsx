import React from "react";
import { trimDate } from "../../utils/utils.js";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TableRow = ({ naturalEvents }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {naturalEvents.map((i) => (
          <tr key={i.id} className={i.closed ? "closed" : ""}>
            <td>
              <Link
                to={{
                  pathname: `event/${i.id}`,
                  state: { i },
                }}
              >
                {i.title}
              </Link>{" "}
            </td>
            <td>{trimDate(i.geometry[0].date)}</td>
            <td>{i.closed ? "closed" : "open"}</td>
            <td>{i.categories[0].title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableRow;
