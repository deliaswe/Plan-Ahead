import './sytle.css';

const Footer = () => {
    return (
        <footer className='footer mt-auto py-3 bg-dark text-white'>
            <div className='container'>
                <div className='d-flex flex-column align-items-center mx-md-transparent-bg'>
                    <a href='https://github.com/deliaswe' target='_blank' rel='noopener noreferrer'>
                        <span className='d-inline-block mx-1 name'>Delia Young</span>
                    </a>
            </div>
        <section className='footer' id='footer'>
            <section className='form-footer'>
                <h5 className='text-center mb-3'>Designed by Delia Young</h5>
                <p className='text-center mb-o'>
                    <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
                </p>
            </section>
        </section>
        </div>
        </footer>
    );
};

export default Footer;