import Contact from '../components/Contact.jsx';
import '../index.css';
// import planImage from '../assets/plan.png';

const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='home-title'>Welcome to the Home Page!</h1>
            <div className='home-content'>
                <p>
                    We're glad to see you here! With our platform, you can easily see all your upcoming plans and make necessary changes to them.
                </p>
                </div>
                <div className='container'>
                    <Contact />
                </div>
        </div>
    );
};

export default Home;