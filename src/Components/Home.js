import React, { useState } from "react"
import {Container, Card, Row, Col, CardTitle, CardBody, CardHeader, Button, Popover, PopoverHeader, PopoverBody} from "reactstrap"
import {Link} from "react-router-dom"



const Home = () => {
    const [popoverOpen, setPopoverOpen] = useState(false) 
    const toggle = () =>setPopoverOpen(!popoverOpen)

    return (
        <Container>
        <h1 className="text-warning text-center" style={{marginTop: "50px"}}>Welcome to Quizzy</h1>
        <h4 className="text-center">A simple quiz app</h4>
        <Row className="mb-5 mt-5">
        <Col md="6" className="offset-md-3">
        <Card className="pt-3 pb-5" style={{backgroundColor: "#0A3D62"}}>
        <CardHeader className="text-primary mt-3 text-center">SETTINGS</CardHeader>
        <CardBody>
        <Button block className="text-white" tag={Link} to="/quizsection"><h4>Play Now</h4></Button>
        <Button block id="Popover1" className="text-white"><h4>Instructions</h4></Button>
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Instructions</PopoverHeader>
        <PopoverBody>Funny! No such hard hitting instructions. Just a simple game. You have to answer 15 general questions and you will get 1 point for every correct answer and 1 wrong point for every wrong answer. You can answer a particular question only once</PopoverBody>
        </Popover>
        </CardBody>
        

        </Card>
        </Col>
        </Row>
        </Container>
    )
}

export default Home;