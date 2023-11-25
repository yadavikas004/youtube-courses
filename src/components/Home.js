import React from "react";
import {Container,Button} from "reactstrap";
import '../App.css';


const Home = () => {
    return(
        <div>
            <div class="jumbotron">
                <h1>Start Coding With Fun</h1>
                <p>This is developed by Me for learning purpose backend is on spring boot and frontend on reactjs</p>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
            </div>

        </div>
    )
}

export default Home;