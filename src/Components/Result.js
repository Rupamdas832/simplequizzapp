import React from "react"
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";
import {FcCheckmark} from "react-icons/fc"
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

const Result = ({correctCounter, wrongCounter, questionLeft, setCorrectCounter, setWrongCounter, setQuestionLeft}) => {

    let percentage= ((parseInt(correctCounter))/(parseInt(questionLeft)-1))*100;
    let skip = parseInt(questionLeft)- 1 - parseInt(correctCounter) - parseInt(wrongCounter);

    const feedbackmesg = () => {
        if(percentage<=50) {
            return <h3 className="text-danger resultMessage">You Can Do Better</h3>
        }
        else if(percentage >=50 && percentage<=80) {
            return <h3 className="text-info resultMessage">Good Going</h3>
        }
        else return <h3 className="text-success resultMessage">Excelent Work</h3>
    }
    const changeState = () => {
       return ( setQuestionLeft("1"),
        setWrongCounter("0"),
        setCorrectCounter("0"),
        <QuestionCard/>
       )
    }
    return (
    <Container fluid  className="container">
        <Row style={{margin: "40px"}} className="resultRow">
        <Col md="8" className="offset-md-2">
        <Jumbotron>
        <div className="text-center">{feedbackmesg()}</div>
        <h1 className="display-3 text-info text-center mt-2">Your Score: <span className="ml-5">{percentage.toFixed(2)}</span>%</h1>
        <div className="mt-5">
        <h5 className="text-center text-black">Total Questions<span className="ml-5">{parseInt(questionLeft) - 1}</span></h5>
        <h5 className="text-center text-black mt-3">Questions Skipped<span className="ml-5">{skip}</span></h5>
        <h5 className="text-center text-success mt-3">Correct Answers<span className="ml-5">{correctCounter}</span></h5>
        <h5 className="text-center text-danger mt-3">Wrong Answers<span className="ml-5">{wrongCounter}</span></h5>
        </div>
        <div className="text-center"><Button tag={Link} to="/" color="info" block className="mt-5">Home</Button></div>
        <div className="text-center"><Button color="success" block className="mt-1" onClick={changeState}>Play Again</Button></div>
        </Jumbotron>
        </Col>
        </Row>
    </Container>
    )
}
export default Result;