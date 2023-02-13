import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LoggerSearch from './components/LoggerSearch/LoggerSearch';
import DataList from './components/DataList/DataList';
import Pagination from './components/Pagination/Pagination';

const TABLE_HEADERS = [
  "Log Id",
  "Application Type",
  "Application Id",
  "Action",
  "Action Detail",
  "Date:Time",
];

const TABLE_KEYS = [
  "logId",
  "applicationType",
  "applicationId",
  "actionType",
  "actionType",
  "creationTimestamp"
];

const PAGE_LIMIT = 10;

function App() {
  const [dataItems, setDataItems] = useState([]);
  const [dataItemOrignial, setDataItemOriginal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f');
      if (response && response.data) {
        setDataItems(response.data.result.auditLog)
        setDataItemOriginal(response.data.result.auditLog)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="loggersearch">
        <LoggerSearch
          dataItemOrignial={dataItemOrignial}
          dataItems={dataItems}
          setDataItems={setDataItems}
        />
      </div>
      <div className="tableContainer">
        {
          dataItems.length > 0 ? (
            <>
              <DataList
                headers={TABLE_HEADERS}
                rowKeys={TABLE_KEYS}
                data={dataItems.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT)}
              />

              <div className="paginationContainer">
                <Pagination
                  limit={PAGE_LIMIT}
                  data={dataItems}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            </>
          ) : (
            <p> Data Uploading....</p>
          )
        }
      </div>
    </div>
  );
}

export default App;
