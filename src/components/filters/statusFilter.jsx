import React from "react";
import Form from "react-bootstrap/Form";
import { fetchNaturalEventsByStatus } from "../../store/naturalEventsAction";
import { useDispatch } from "react-redux";

const StatusFilter = () => {
  const dispatch = useDispatch();

  const chooseStatus = (status) => {
    if (status === "choose") {
      return;
    }
    dispatch(fetchNaturalEventsByStatus(status));
  };

  return (
    <Form.Select
      onChange={(e) => {
        chooseStatus(e.target.value);
      }}
      aria-label="Floating label select example"
    >
      <option value="choose">Choose status</option>
      <option value="all">All</option>
      <option value="closed">Closed</option>
      <option value="open">Open</option>
    </Form.Select>
  );
};
export default StatusFilter;
