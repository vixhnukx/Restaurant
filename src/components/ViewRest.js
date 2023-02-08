import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch,useSelector} from 'react-redux';


function ViewRest() {
  const params=useParams()

  // // console.log(params);

 
  //   const [allrestaurant,setAllrestaurant]=useState([])
  
  
  //        // function to api call for datas inside json file
  //        const getrestaurantdata=async()=>{
  //         await fetch('/restaurants.json').then(data=>{
  //           data.json().then(result=>{
  //             // consol.log(result)
  //             setAllrestaurant(result.restaurants)
  //           })
  //         })
  //        }
        //  console.log(allrestaurant);

       
         useEffect(()=>{
          // getrestaurantdata()
         },[])

         const result=useSelector(state=>state.restaurantReducer)
         const {restaurentList}=result 

         const restData=restaurentList.find(item=>item.id==params.id)

         console.log(restData);
      
  return (

    <>
    {restData?
      <Row>

        <Col>
       <Image className='p-5' src={restData.photograph} fluid/>

        </Col>
        <Col className='mt-5'>
        <h1>{restData.name}</h1>
        <h3>{restData.neighborhood}</h3>
        <h4>cusine type:{restData.cuisine_type}</h4>
        <h4>address:{restData.address}</h4><br></br>

      
       <Operatingtime timedata={restData.operating_hours}></Operatingtime>
       <Review reviewdata={restData.reviews}></Review>
        </Col>
      </Row>
:'null'}
    </>
  )
}


export default ViewRest