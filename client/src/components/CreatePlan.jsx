import { useMutation } from '@apollo/client';
import { CREATE_PLAN } from '../utils/mutations';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

const CreatePlan = () => {
    const [createPlan, { error }] = useMutation(CREATE_PLAN);
    const [planInput, setPlanInput] = useState({
        title: '',
        description: '',
        date: '',
    });
    const userToken = Auth.loggedIn();
    const userId = userToken.data._id;
    const handleFormSubmit = async (plan) => {
        try {
            console.log({ variables: {
                title: planInput.title,
                description: planInput.description,
                date: planInput.date,
            },})
            await createPlan({
                variables: {
                    title: planInput.title,
                    description: planInput.description,
                    date: planInput.date,
                    userId: userId,
                },
            });
            setPlanInput({
                title: '',
                description: '',
                date: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='text-light bg-dark p-5'>
            <Container>
                <h1>Create Plan</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                            name='title'
                            value={planInput.title}
                            onChange={(e) =>
                                setPlanInput({ ...planInput, title: e.target.value })
                            }
                            type='text'
                            size='lg'
                            placeholder='Plan Title'
                            required
                            />
                            <Form.Control
                            name='description'
                            value={planInput.description}
                            onChange={(e) =>
                                setPlanInput({ ...planInput, description: e.target.value })
                            }
                            type='text'
                            size='lg'
                            placeholder='Plan Description'
                            required
                            />
                            <Form.Control
                            name='date'
                            value={planInput.date}
                            onChange={(e) =>
                                setPlanInput({ ...planInput, date: e.target.value })
                            }
                            type='date'
                            size='lg'
                            placeholder='Plan Date'
                            required
                            />
                            <Form.Control
                            name='userId'
                            value={planInput.userId}
                            onChange={(e) =>
                                setPlanInput({ ...planInput, userId: e.target.value })
                            }
                            type='hidden'
                            size='lg'
                            placeholder='User ID'
                            required
                            />
                            <Form.Control
                            name='username'
                            value={planInput.username}
                            onChange={(e) =>
                                setPlanInput({ ...planInput, username: e.target.value })
                            }
                            type='hidden'
                            size='lg'
                            placeholder='Username'
                            required
                            />
                        <Button type='submit' variant='success' size='lg'>
                            Submit
                        </Button>
                        </Col>
                        </Row>
                </Form>
                </Container>
        </div>
    );
};

export default CreatePlan;