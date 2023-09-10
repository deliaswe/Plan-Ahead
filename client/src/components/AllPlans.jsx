import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ALL_PLANS } from '../utils/queries';
import Image from '../assets/images/techmeet4.png';

const AllPlans = () => {
const { loading, data } = useQuery(GET_ALL_PLANS);
if (loading) {
    return <div>Loading future plans...</div>;
}
const plans = data.plans;

return (
    <div className="container">
    <h3 className="mb-4">All Plans</h3>
    {plans.length === 0 ? (
        <div>No plans found</div>
    ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {plans.map((plan) => (
            <div key={plan._id} className="col">
            <Link to={`/planDetails/${plan._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card h-100">
                {parseInt(plan.date) < new Date().getFullYear() ? (
                    <div>
                    <img
                        src={Image} // Replace with the correct variable name
                        className="card-img-top"
                        alt={plan.title}
                        style={{ filter: 'brightness(25%)' }}
                    />
                    <p
                        style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '1',
                        color: 'white',
                        }}
                    >
                        Your plan is in the past
                    </p>
                    </div>
                ) : (
                    <img src={Image} className="card-img-top" alt={plan.title} />
)}
                <div className="card-body">
                    <h5 className="card-title">{plan.title}</h5>
                    <p className="card-text">{plan.description}</p>
                </div>
                <div className="mb-1">
                    <span className="fw-bold me-1">Date:</span>
                    {new Date(parseInt(plan.date)).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
})}
                </div>
                </div>
            </Link>
            </div>
))}
        </div>
)}
    </div>
);
};

export default AllPlans;