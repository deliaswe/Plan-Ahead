import 'bootstarp/dist/css/bootstrap.min.css';
import './sytles.css';

function Contact() {
    return (
        <div className="container d-flex flex-column justify-content-center min-vh-100">
            <div className="row">
                <div className='col-md-6 offset-md-3'>
                    <h1 className='title'>Contact Us</h1>
                    <form
                    action='https://getform.io/f/7b4b5c7e-9e1a-4b0e-8b0a-4b0b6b0b6b0b'
                    method='POST'
                    className='d-flex flex-column'
                    >
                        <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        className='inputField glow'
                        />
                        <textarea
                        name='message'
                        placeholder='Enter Message'
                        rows='5'
                        className='textareaField glow'
                        />
                        <button type='submit' className='submitButton'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;