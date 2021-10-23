import { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";


const ErrorPage = () => {
    document.title = "Shop- 404 error";
    const history = useHistory();
    useEffect(() => {
        setTimeout(() =>
            history.push("/"),
            5000);
    })


    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "70vh" }}>
                    <h2 >404 Error</h2>
                    <p>Page not found</p>
                    <div className="d-flex justify-content-around" style={{ width: "30vw" }}>
                        <Button variant="dark" as={Link} to="/" style={{ borderRadius: "2rem" }} className="px-5">Home</Button>
                        <Button variant="dark" as={Link} to="/contact" style={{ borderRadius: "2rem" }} className="px-5">Contact</Button>

                    </div>
                </div>

            </Container>        </>
    )
}

export default ErrorPage;