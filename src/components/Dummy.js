import React, { useState, useEffect } from "react";
import { api } from "./api";

import axios from "axios";

export default function Dummy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      //console.log(res);
    });
  });

  return (
    <div>
      {data.map((data) => {
        return <h4>{data["title"]}</h4>;
      })}
    </div>
  );
}
