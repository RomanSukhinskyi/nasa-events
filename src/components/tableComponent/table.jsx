import React, { useEffect } from "react";
import { fetchNaturalEvents } from "../../store/naturalEventsAction.js";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../utils/utils.js";
import Loader from "../loader/loader.jsx";
import TableRow from "../tableRow/tableRow.jsx";
import StatusFilter from "../filters/statusFilter.jsx";
import CategoryFilter from "../filters/categoryFilter.jsx";
import "./style.css";

const TableComponent = () => {
  const dispatch = useDispatch();

  const naturalEvents = useSelector((state) => state.naturalEvents.data);
  const loading = useSelector((state) => state.naturalEvents.loading);

  React.useEffect(() => {
    dispatch(fetchNaturalEvents());
    if (naturalEvents) {
      getCategory(naturalEvents);
    }
  }, [dispatch]);

  return (
    <>
      <div className="flex-container">
        <StatusFilter />
        <CategoryFilter />
      </div>

      {loading ? <Loader /> : <TableRow naturalEvents={naturalEvents} />}
    </>
  );
};

export default TableComponent;
