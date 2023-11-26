import React from "react";
import { Container, Button } from "reactstrap";
import { toast } from 'react-toastify';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    const btnHandle = () => {
        toast.success("done...",{
          position:"top-center"
        });
      }

    return (
        <div className=" align-items-center justify-content-center padding-10">
            <div className="jumbotron text-center">
                <h1 className=""> Start Coding With Fun</h1> 
                <p className="lead">This is developed by Me for learning purpose backend is on spring boot and frontend on reactjs</p>
                <Container>
                    <Button outline color="primary" onClick={btnHandle}>Start Using</Button>
                </Container>
                {/* <hr className="my-4" /> */}
                {/* <p>
                    You can add more content or features here.
                </p> */}
            </div>

        </div>
    )
}

export default Home;