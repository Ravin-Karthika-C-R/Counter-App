import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OperatingHour from '../components/OperatingHour';

function SingleView() {

    //state
    const [AllData,SetData]=useState([])

    //create an object foe useParams
    const {id}=useParams()
    console.log(id);

    const fetchAllDatas=async()=>{
        const result=await axios.get('/restaurants.json')
        SetData(result.data.restaurants);
    }
    useEffect(()=>{
        fetchAllDatas();
    },[])
    // console.log(AllData );

    const singleData=AllData.find(i=>i.id==id)
    console.log(singleData);
  return (
    <div className='me-5'>{ singleData &&
        <Row className='p-5'>
            <Col>
            {/* <p>{singleData.name}</p> */}
            <img style={{height:'600px',width:'100%'}} src={singleData.photograph}></img>
            {/* <img src={singleData.photograph} /> */}
            </Col>
            <Col className='p-4 ms-3'>
                <h1 className='text-danger'>{singleData.name}</h1>
                <ListGroup className='fs-5 pt-5 mt-3 w-100'>
                    <ListGroup.Item className='mt-3'> <span style={{color:'#F94C10'}}> Address</span>  : {singleData.address}</ListGroup.Item>
                    <ListGroup.Item className='mt-3'><span style={{color:'#F94C10'}}>Neighborhood</span> : {singleData.neighborhood}</ListGroup.Item>
                    <ListGroup.Item className='mt-3'><span style={{color:'#F94C10'}}>Cuisine Type</span> : {singleData.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item className='mt-3'>
                        <OperatingHour data={singleData.operating_hours}></OperatingHour>
                    </ListGroup.Item>
                    <ListGroup.Item className='mt-3'>
                    <Button className='w-100 bg-warning'> Reviews</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        }
        
    
    </div>
  )
}
export default SingleView