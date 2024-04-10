import MailchimpSubscribe from "react-mailchimp-subscribe"
import Newsletter from './Newsletter'

function MailchimpForm() {
    const { VITE_MAILCHIMP_URL, VITE_MAILCHIMP_U, VITE_MAILCHIMP_ID } = import.meta.env 
    const postUrl = `${VITE_MAILCHIMP_URL}?u=${VITE_MAILCHIMP_U}&id=${VITE_MAILCHIMP_ID} `

    return(
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                        status={status || ''}
                        message={message || ''}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    )
}

export default MailchimpForm