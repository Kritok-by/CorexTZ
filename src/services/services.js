import React from "react";
import Async from "react-async";
import List from "../components/Main/Lists/List/List";

const loadJson = () =>
  fetch("http://localhost:3000/store")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

const Services = () => (
  <Async promiseFn={loadJson}>
    <Async.Loading>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Async.Loading>

    <Async.Resolved>
      {(data) => (
        <ul>
          {data.map((el) => (
            <List data={el} key={el.id} />
          ))}
        </ul>
      )}
    </Async.Resolved>

    <Async.Rejected>
      {(error) => `Something went wrong: ${error.message}`}
    </Async.Rejected>
  </Async>
);

export default Services;
