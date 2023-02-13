import { useState } from "react";
import "./LoggerSearch.css";

const INITIAL_STATE = [
  {
    label: "Log Id",
    filterBy: "logId",
    filterSearch: "",
  },
  {
    label: "Action Type ",
    filterBy: "actionType",
    filterSearch: "",
  },
  {
    label: "Application Type",
    filterBy: "applicationType",
    filterSearch: "",
  },
  {
    label: "From Date",
    filterBy: "creationTimestamp",
    filterSearch: "",
  },
  {
    label: "To Date",
    filterBy: "creationTimestamp",
    filterSearch: "",
  },
  {
    label: "Application Id",
    filterBy: "applicationId",
    filterSearch: "",
  }

];

function LoggerSearch(props) {

  const { dataItems, setDataItems, dataItemOrignial } = props;
  const [filters, setFilters] = useState(INITIAL_STATE);

  const handleSubmit = () => {
    filters.forEach((item) => {
      if (item.filterSearch !== "") {
        const result = dataItems.filter((data) => data[item.filterBy].toString() === item.filterSearch)
        setDataItems(result);
      }
    })
  }
  const handleReset = () => {
    setDataItems(dataItemOrignial);
    setFilters(INITIAL_STATE);
  }



  return (
    <div className="LoggerSearch">
      {
        filters.map((item, index) => (
          <div className="keySearch"
            key={index}>
            <label>{item.label}</label>

            <input
              name={item.filterBy}
              onChange={(e) => {
                const value = e.target.value;
                const newItem = item;
                newItem.filterSearch = value;
                filters[index] = newItem;
                setFilters(filters);
              }}
            />
          </div>

        ))

      }
      <div >{
        dataItemOrignial.length !== dataItems.length ? (
          <button onClick={handleReset}>Reset Logger</button>)
          : (
            <button onClick={handleSubmit}>SearchLogger</button>)
      }

      </div>
    </div>
  );
}


export default LoggerSearch;
