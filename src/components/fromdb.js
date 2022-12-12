import axios from "axios";
import React, { useState } from "react";

const[data,setData] = useState([])
const configuration = {
    method: "get",
    url: "localhost:8080/movie/home",
  };

axios(configuration)
.then((result)=>{
setData(result);
})
.catch((e)=>console.log(e))

const movies = data;

export default movies;