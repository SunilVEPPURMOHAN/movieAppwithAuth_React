import axios from "axios";
import React, { useState } from "react";

const[data,setData] = useState([])
const configuration = {
    method: "get",
    url: "https://real-flannel-shirt-bee.cyclic.app/movie/home",
  };

axios(configuration)
.then((result)=>{
setData(result);
})
.catch((e)=>console.log(e))

const movies = data;

export default movies;