import React from "react";
import { Container, Button } from "reactstrap";
import { toast } from 'react-toastify';
import '../App.css';


const Home = () => {
    const btnHandle = () => {
        toast.success("done...",{
          position:"top-center"
        });
      }

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4"> Start Coding With Fun</h1>
                <p className="lead">This is developed by Me for learning purpose backend is on spring boot and frontend on reactjs</p>
                <Container>
                    <Button color="primary" onClick={btnHandle}>Start Using</Button>
                </Container>
                <hr className="my-4" />
                <p>
                    You can add more content or features here.
                </p>
            </div>

        </div>
    )
}

export default Home;