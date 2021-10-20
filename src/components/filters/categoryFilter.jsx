import React from "react";
import { useDispatch } from "react-redux";
import { fetchNaturalEventsByCategory } from "../../store/naturalEventsAction.js";
import Form from "react-bootstrap/Form";

const CategoryFilter = () => {
  const categories = [
    { id: "wildfires", title: "Wildfires" },
    { id: "severeStorms", title: "Severe Storms" },
    { id: "volcanoes", title: "Volcanoes" },
  ];

  const dispatch = useDispatch();

  const filterByCategory = (category) => {
    if (category === "choose") {
      return;
    }
    dispatch(fetchNaturalEventsByCategory(category));
  };

  return (
    <Form.Select
      onChange={(e) => {
        filterByCategory(e.target.value);
      }}
      aria-label="Floating label select example"
    >
      <option value="choose">Choose category</option>
      {categories.map((c) => (
        <option value={c.id} key={c.id}>
          {c.title}
        </option>
      ))}
    </Form.Select>
  );
};

export default CategoryFilter;
