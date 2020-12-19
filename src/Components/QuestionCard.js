import React, { useState} from "react"
import {Container, Row, Col, Card, CardHeader, CardBody, Button, CardFooter, NavLink} from "reactstrap"
import {toast} from "react-toastify"
import questions from "../assets/asset2"
import { Redirect, Link } from "react-router-dom"
import Result from "./Result"



const QuestionCard = () => {

    const [num, SetNum] = useState("0")
    const [correctCounter, setCorrectCounter] = useState("0");
    const [wrongCounter, setWrongCounter] = useState("0");
    const [questionLeft, setQuestionLeft] = useState("1")


    const randomNumber = () => {
        return (
            Math.floor(Math.random()*questions.length)
        )
    }

    const NextQuestionIndex = () => {
        return (
            SetNum(randomNumber()),
            setQuestionLeft(parseInt(questionLeft) + 1)
        )
    }

    if(questionLeft==16) {
        return (
        <Result correctCounter={correctCounter} wrongCounter={wrongCounter} questionLeft={questionLeft} setCorrectCounter={setCorrectCounter} setWrongCounter={setWrongCounter} setQuestionLeft={setQuestionLeft} />)
    }



    const checkAnswerA = () => {
            if(questions[num].a === questions[num].answer) {
                return coorectAnswer();
            }
            else return wrongAnswer();
    }
    const checkAnswerB = () => {
        if(questions[num].b === questions[num].answer) {
            return coorectAnswer();
        }
        else return wrongAnswer();
}
const checkAnswerC = () => {
    if(questions[num].c === questions[num].answer) {
        return coorectAnswer();
    }
    else return wrongAnswer();
}
const checkAnswerD = () => {
    if(questions[num].d === questions[num].answer) {
        return coorectAnswer();
    }
    else return wrongAnswer();
}

const coorectAnswer = () => {
    return (
        toast("CORRECT", {type: "success"}),
        NextQuestionIndex(),
        setCorrectCounter(parseInt(correctCounter) + 1)
    )
}

const wrongAnswer = () => {
    return (
        toast("WRONG", {type: "error"}),
        NextQuestionIndex(),
        setWrongCounter(parseInt(wrongCounter) + 1)
    )
}


    return (
        <Container fluid className="container">
        {/*<div className="counter">
        <div><h3>Correct Answer {correctCounter}</h3></div>
        <div><h3>Wrong Answer  {wrongCounter}</h3></div>
    </div>*/}
       
        <Row style={{margin: "80px"}} className="cardRow">
        <Col md="8" className="offset-md-2 cardCol">
        <Card>
        <CardHeader><h5>Q{questionLeft}<span className="ml-3"></span>{questions[num].question}</h5><span className="badge badge-warning float-right">{questionLeft} of 15</span></CardHeader>
        <CardBody className="cardBody">
        <Button className="mr-5 ml-5 mt-2 mb-2 bg-info text-left cardButton" style={{height: "50px", width: "200px"}} onClick={checkAnswerA}><span className="badge badge-success">A </span><span className="ml-2"></span>{questions[num].a}</Button>
        <Button className="mr-5 ml-5 mt-2 mb-2 bg-info text-left float-right cardButton" style={{height: "50px", width: "200px"}} onClick={checkAnswerB}><span className="badge badge-success">B </span><span className="ml-2"></span>{questions[num].b}</Button>
        <Button className="mr-5 ml-5 mt-2 mb-2 bg-info text-left cardButton" style={{height: "50px", width: "200px"}} onClick={checkAnswerC}><span className="badge badge-success">C </span><span className="ml-2"></span>{questions[num].c}</Button>
        <Button className="mr-5 ml-5 mt-2 mb-2 bg-info text-left float-right cardButton" style={{height: "50px", width: "200px"}} onClick={checkAnswerD}><span className="badge badge-success">D </span><span className="ml-2"></span>{questions[num].d}</Button>
        </CardBody>
        <CardFooter className="cardFooter">
        <Button className="bg-danger footerBtn" tag={Link} to="/">Quit Game</Button>
        <Button className="bg-success float-right footerBtn" onClick={NextQuestionIndex}>Skip Question</Button>
        </CardFooter>
        </Card>
        </Col>
        </Row>
        </Container>
        
    )
}

export default QuestionCard;