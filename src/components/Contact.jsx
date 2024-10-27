
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [value, setValue] = useState()

    const onFormUpdate = (category, value) => {
        setFormDetails({
        ...formDetails,
        [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setButtonText("Sending...");
        try {
            let response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            
            if (response.ok) {
                setButtonText("Send");
                setFormDetails(formInitialDetails);
                setStatus({ success: true, message: 'Message sent successfully' });    
            } else {
                throw new Error('Network response was not ok');
            }
            } catch (error) {
            console.error('Error sending message:', error);
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });

            } finally {
                setButtonText("Send");
            }
    };

    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className="align-items-center">
                    <div className="contact-container">
                        <h2>Get In Touch</h2>
                        <div className='contact-content'>
                            <Col size={12} md={6} className='left-content'>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className='px-1'>
                                            <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} autoComplete="name" required/>
                                        </Col>
                                        <Col size={12} sm={6} className='px-1'>
                                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} autoComplete="name" required/>
                                        </Col>
                                        <Col  sm={6} className='px-1'>
                                        <PhoneInput defaultCountry="GB" value={value} placeholder="Phone number(optional)"  onChange={setValue} autoComplete="tel" optional="true"/>
                                        </Col>
                                        <Col size={12} sm={6} className='px-1'>
                                        <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
 autoComplete="email" required/>
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <textarea rows="6" name="message" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} required/>
                                            {status.message &&
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            }
                                            <button type='submit'><span>{buttonText}</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                            <Col size={4} md={6} className='right-content'>
                                <h4><FontAwesomeIcon className='location-icon' icon={faLocationDot} /> Bristol, UK</h4>
                                <br></br>
                                <h5>Feel free to send me a message</h5>
                                <h4><FontAwesomeIcon className="contact-icon" icon={faEnvelope} /> Email</h4>
                                <a href='mailto:tzuweilee.20@gmail.com' target='_blank'>tzuweilee.20@gmail.com</a>
                            </Col>
                        </div>   
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Contact

