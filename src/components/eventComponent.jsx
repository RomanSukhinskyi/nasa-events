import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import { trimDate } from "../utils/utils.js";

const EventComponent = () => {
  const {
    state: { i },
  } = useLocation();
  return (
    <>
      <Link to="/">Return to main list</Link>
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
          <tr className={i.closed ? "closed" : ""}>
            <td>{i.title}</td>
            <td>{trimDate(i.geometry[0].date)}</td>
            <td>{i.closed ? "closed" : "open"}</td>
            <td>{i.categories[0].title}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default EventComponent;
