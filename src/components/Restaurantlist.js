import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restuarantAction';
import { useDispatch,useSelector} from 'react-redux';


function Restaurantlist() {
 

      const dispatch = useDispatch()
 const result=useSelector(state=>state.restaurantReducer)
 const {restaurentList}=result 
       useEffect(()=>{
       

        dispatch(RestaurantListAction())
        // getrestaurantdata()
       },[])
        
  return (
    <Row> 
        {
          restaurentList.map(item =>(
           <RestCard data={item}/>
          ))
        }
    </Row>
      )
}

export default Restaurantlist