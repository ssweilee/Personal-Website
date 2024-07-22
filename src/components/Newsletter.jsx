import { Alert, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

function Newsletter ({ status, message, onValidated }) {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (status === 'success') clearFields()
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email) {
            alert("Please provide an email address.")
            return
        } 
        if(email.indexOf("@") === -1) {
            alert("Please provide a valid email address.")
            return
        }
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('')
    }

    let errorMessage = ' ';
    if(typeof message === 'object' && message !== null) {
        errorMessage = message.toString();
    } else {
        errorMessage = message;
    }
     
    return (
        <Col lg={12}>
            <div className="newsletter">
                <div className="newsletter-bx">
                    <Row>
                        <Col> 
                        <div className="newsletter-content">
                            <h3>Subscribe to my Newsletter</h3>   
                        </div>
                        </Col>
                        <Col>
                            <form onSubmit={handleSubmit}>
                                <div className="new-email-bx">
                                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" aria-label="Email Address" />
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </Col>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{errorMessage}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Row>
                </div>
            </div>
            
        </Col>
    )
}

Newsletter.propTypes = {
    onValidated:
    PropTypes.func.isRequired,
    status:
    PropTypes.string.isRequired,
    message:
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired
    
}

export default Newsletter