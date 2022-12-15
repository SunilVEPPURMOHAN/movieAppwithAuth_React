import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Logos from '../components/Logos';
import { urla } from '../components/fromdb';

const cookies = new Cookies();

const AdminPage = () => {

const[admin,setAdmin] = useState(true);
const [users,setUsers] = useState([]);
const [expandedItem, setExpandedItem] = useState(null);
const [movies,setMovies] = useState([]);
const [moviess,setMoviess] = useState([]);
const [expandedMovie, setExpandedMovie] = useState(null);
// const [status,setStatus] = useState("Welcome")


  const toggleItem = (id) => {
    setExpandedItem((expandedItem === id) ? null : id);
setMoviess(movies.filter(x => x.createdBy === id))  }

  const toggleMovie = (id)=>{
    setExpandedMovie((expandedMovie === id)? null : id);
  }

  const isAdmin = ()=>{
    const token = cookies.get("TOKEN");
    const configuration = {
        method: "get",
        url: urla + "/user/isadmin",
        headers: {
            Authorization: `Bearer ${token}`
          }   
      };

      axios(configuration)
      .then((result)=>{
        //   console.log(result);
      setAdmin(result.data);
        })
      .catch((e)=>console.log(e))
  }

const getMovieList = ()=>{
    const token = cookies.get("TOKEN");
    const configuration = {
        method: "get",
        url: urla + "/movie/home",
        headers: {
            Authorization: `Bearer ${token}`
          }
      };
    
    axios(configuration)
    .then((result)=>{
        // console.log(result.data);
    setMovies(result.data);
    setMoviess(result.data);
      })
    .catch((e)=>console.log(e))
}

const getUserList = ()=>{
    const token = cookies.get("TOKEN");

    const configuration = {
        method: "get",
        url: urla + "/user",
        headers: {
            Authorization: `Bearer ${token}`
          }};

    axios(configuration)
    .then((result)=>{
        setUsers(result.data);
        })
    .catch((e)=>console.log(e))}

  const deleteUser = (e) => {
    const token = cookies.get("TOKEN");
    const configuration = {
        method: "delete",
        url: `${urla}/user/${e.target.id}`,
        headers: {
            Authorization: `Bearer ${token}`,
          },
      };

      axios(configuration)
      .then((result)=>{
    //   setStatus(result);
      console.log(result)
        })
      .catch((e)=>console.log(e))

      getUserList();
  }

  const makeAdmin = (e)=>{
    const token = cookies.get("TOKEN");
    const configuration = {
        method: "put",
        url:`${urla}/user/makeadmin`,
        headers:{
            Authorization: `Bearer ${token}`,
        },
        data:{
            id: e.target.id
        }
        };


    axios(configuration)
    .then((result)=>{
    // setStatus(result);
    console.log(e.target.id)
    console.log(result)
      })
    .catch((e)=>console.log(e))

    getUserList();
  }
  

  useEffect(isAdmin,[]);
//to get movie list
  useEffect(
    getMovieList
    ,[]);

    //to get user list
useEffect(getUserList);





  return (
   <>
   
<Row style={{ height: '100vh', minHeight: '100vh', flexWrap: "nowrap", overflow:'auto' }}>
        <Col style={{ backgroundColor: "lightsteelblue", width: '5vw',minWidth:'5vw', minHeight:'100vh', position:"fixed", left:'0'}}>
        <Logos/></Col>
        {!admin && <Row><Col></Col><Col><h1>You are not an admin!</h1></Col><Col></Col></Row>}
        {admin && (<Col style={{ backgroundColor: 'grey', width:'95vw', minWidth:'95vw', position:'fixed', left:'5vw'}}>
        <Row style={{ height: '10vh', minHeight: '10vh', flexWrap: "wrap" , position: "fixed", top:'0', width: '100%', backgroundColor:"darkblue", color: 'yellow'}}><h1>Admin Panel</h1> </Row>
     


        <Row style={{ height: '90vh', minHeight: '90vh', flexWrap: "wrap", position: "fixed", bottom:'0', width: '100%',overflow: 'auto' }}>
        <Col style={{ backgroundColor: "white", width: '20vw', minWidth:'20vw' }}>
         <h1>Users</h1>
         <ul>
      {users.map((x) => (
        <li key={x._id} onClick={() => toggleItem(x._id)}>
          {x.name}
          <div style={{display: (expandedItem === x._id? 'block' : 'none' ), fontWeight: 'bold'}}>
            {x.admin}<br/>
            {x.admin !== "admin" && 
            <><button id={x._id} onClick={deleteUser}>Delete</button>
            <button id={x._id} onClick={makeAdmin}>Make admin</button>
            </> }
          </div>
        </li>
      ))}</ul>
</Col>
<Col style={{ backgroundColor: "grey", width:'60vw', minWidth:'60vw', paddingRight:"100", overflow:'auto' }}>

<ul>
    <h2>{moviess.length} Movies</h2>
{moviess.map((xx) => (
        <li key={xx._id} onClick={() => toggleMovie(xx._id)}>
          {xx.title}...created by {users.filter(xxx=>xx.createdBy === xxx._id)[0].name}
          <div style={{display: (expandedMovie === xx._id? 'block' : 'none' )}}>
           IMDB {xx.imdbRating}<br/>
          </div>
        </li>
      ))} </ul></Col>
      <Col style={{ backgroundColor: "grey", width:'10vw', minWidth:'10vw', paddingRight:"100", overflow:'auto', justifyItems: 'center' }}>
      <Button onClick={(e)=>{e.preventDefault(); setMoviess(movies);}}>See all</Button>
      </Col>
      <Col style={{ backgroundColor: "grey", width:'5vw', minWidth:'5vw', paddingRight:"100", overflow:'auto', justifyItems: 'center' }}></Col>
      </Row>
   
</Col>)}
        </Row>
       
</>
  );
}

export default AdminPage;
