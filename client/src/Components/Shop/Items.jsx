import { Modal, Button } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal'
import { useState } from "react";


const Items = props => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="col-md-4 mx-auto col-10 ">
                <div className="card ">
                    <img src={props.image} className="card-img-top img-fluid" style={{ height: "20vh", width: "20vh" }} alt="Card" />
                    <div className="card-body">
                        <h6 className="card-title">{props.title}</h6>
                        {/*<p className="card-text">{props.description}</p>*/}
                        <p className="card-text">Price: {props.price}</p>
                        <button className="btn btn-outline-primary" style={{ borderRadius: "0" }} onClick={handleShow}>More info</button>
                    </div>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Items;