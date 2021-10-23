import { Form, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";




const FormControl = props => {
    const [inputControl, setInputControl] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [showLoading, setShowLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // const [show, setShow] = useState(true);


    const { name, email, subject, message } = inputControl;


    const inputEvent = (e) => {
        const { name, value } = e.target;
        setInputControl((pre) => {
            return { ...pre, [name]: value }
        })
    }
    const SubmitContactForm = async (e) => {
        e.preventDefault();
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("empty field")
            return;
        }
        // alert(name);
        setShowLoading(true);

        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        })
        const responseMessage = await response.json();
        if (responseMessage["message"] === "success") {
            setShowLoading(false);
            setShowAlert(true);
        }


    }


    return (

        <div className="m-4 ">
            <Alert variant={"success"} className={`${(showAlert) ? "d-block" : "d-none"}`} >Form has been sumbited</Alert>

            <Form method="post" action="/contact" onSubmit={SubmitContactForm}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className={`${(props.mode === "light") ? "bg-light text-dark" : "bg-dark text-light border-secondary"}`} name="name" value={name} onChange={inputEvent} placeholder="Enter your name " style={{ borderRadius: "0" }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" className={`${(props.mode === "light") ? "bg-light text-dark" : "bg-dark text-light border-secondary"}`} value={email} onChange={inputEvent} placeholder="Enter your email" style={{ borderRadius: "0" }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" className={`${(props.mode === "light") ? "bg-light text-dark" : "bg-dark text-light border-secondary"}`} value={subject} onChange={inputEvent} placeholder="Enter subject " style={{ borderRadius: "0" }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Message</Form.Label>
                    <Form.Control as="textarea" name="message" className={`${(props.mode === "light") ? "bg-light text-dark" : "bg-dark text-light border-secondary"}`} value={message} onChange={inputEvent} rows={5} style={{ borderRadius: "0" }} />
                </Form.Group>
                <button type="submit" className={`btn btn-primary ${(showLoading) ? "d-none" : "d-block"}`} style={{ borderRadius: "0" }}>Submit</button>
                <div className={`text-center ${(showLoading) ? "d-block" : "d-none"}`} >
                    <Spinner animation="border" className={`${(props.mode === "dark") ? "text-light" : "text-dark"}`} />
                </div>
            </Form>

        </div>
    )
}

export default FormControl;