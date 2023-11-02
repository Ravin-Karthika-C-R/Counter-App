import React, { useEffect, useState } from "react"
import axios from "axios";
import RestCard from "../components/RestCard";
import { Col, Container, Row } from "react-bootstrap";


function Home() {
  const [restaurants, seRestaurants] = useState([])
  const fetchData = async () => {
    const result = await axios.get('/restaurants.json')
    // console.log(result.data.restaurants);
    //to update code is below
    seRestaurants(result.data.restaurants);
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(restaurants);
  return (
    
      <div className="me-5">
       <Row className="ms-5">
        <h1>Find Best Restaurants</h1>
        <Col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quod!
        </p>
        </Col>
        <Col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quod!
        </p>
        </Col>
        
      </Row>

      <Row className="ms-5">
        {
          restaurants.map(i => (
            <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
            <RestCard item={i}></RestCard>

            </Col>  ))
        }
      </Row>    

      </div>

    
  )
}
export default Home