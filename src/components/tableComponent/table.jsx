import React, { useState, useEffect } from "react";
import { fetchNaturalEvents } from "../../store/naturalEventsAction.js";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch, useSelector } from "react-redux";
import { trimDate } from "../../utils/utils.js";
import Loader from "../loader/loader.jsx";
import "./style.css";

const TableComponent = () => {
  const dispatch = useDispatch();

  const naturalEvents = useSelector((state) => state.naturalEvents.data);
  const loading = useSelector((state) => state.naturalEvents.loading);

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  // get unique category
  const getCategory = (category) => {
    let uniqueCategory = new Set();
    category.map((c) => uniqueCategory.add(c.categories[0].title));
    return (uniqueCategory = Array.from(uniqueCategory));
  };

  const filterByCategory = (category) => {
    const choosenCategory = naturalEvents.filter(
      (e) => e.categories[0].title === category
    );
    setData(choosenCategory);
  };

  const filterByStatus = (status) => {
    if (status === "closed") {
      const closedEvents = naturalEvents.filter((e) => e.closed !== null);
      setData(closedEvents);
    } else if (status === "open") {
      const openedEvents = naturalEvents.filter((e) => e.closed === null);
      setData(openedEvents);
    } else {
      setData(naturalEvents);
    }
  };

  useEffect(() => {
    dispatch(fetchNaturalEvents());
    if (naturalEvents.length !== 0) {
      setData(naturalEvents);
      setCategory(getCategory(data));
    }
  }, [dispatch, setData]);

  if (loading) {
    return <Loader />;
  }

  if (data) {
    return (
      <>
        <h3>Filter by:</h3>
        <div className="flex-container">
          <FloatingLabel controlId="floatingSelect" label="Sort by status">
            <Form.Select
              onChange={(e) => filterByStatus(e.target.value)}
              aria-label="Floating label select example"
            >
              <option>Open this select menu</option>
              <option value="all">All</option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="floatingSelect" label="Sort by status">
            <Form.Select
              onChange={(e) => {
                filterByCategory(e.target.value);
              }}
              aria-label="Floating label select example"
            >
              {category
                ? category.map((u) => (
                    <option value={u} key={u}>
                      {u}
                    </option>
                  ))
                : null}
            </Form.Select>
          </FloatingLabel>
        </div>

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
            {data.map((i) => (
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
      </>
    );
  }

  return <></>;
};

export default TableComponent;
