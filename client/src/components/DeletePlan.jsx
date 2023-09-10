import { useMutation } from '@apollo/client';
import { DELETE_PLAN } from '../utils/mutations';
import { Button } from 'react-bootstrap';

// delete plan button
const DeletePlan = ({ planId }) => {
    const [deletePlan, { error }] = useMutation(DELETE_PLAN);

    const handleDeletePlan = async () => {
        try {
            await deletePlan({
                variables: {
                    planId: planId,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Button
            variant='danger'
            onClick={handleDeletePlan}
        >
            Delete Plan
        </Button>
    );
}

export default DeletePlan;