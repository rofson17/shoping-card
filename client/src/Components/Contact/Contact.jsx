import {Container } from "react-bootstrap";
import FormControl  from "./Form";


const Contact= props =>{
    document.title="Shop- Contact";

    return (
        <div className={`bg-${props.mode}`}>
            <Container className="pt-5" >
                <h2 className="text-center text-primary border-bottom">Contact Us</h2>
                <div className={`row d-flex justify-content-center align-items-center bg-${props.mode} py-5`}  >
                    <div className={`col-6 border bg-${(props.mode==="light")?"white":"black text-white border-secondary"} `} >
                        <FormControl mode={props.mode}/>
                    </div>
                </div>



            </Container>
        </div>
    )
}

export default  Contact;