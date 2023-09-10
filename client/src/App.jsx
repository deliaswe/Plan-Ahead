import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from 'apollo/link/context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './components/styles.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyPlans from './components/MyPlans';
import AllPlans from './components/AllPlans';
import UpdatePlan from './components/UpdatePlan';
import CreatePlan from './components/CreatePlan';
import PlanDetails from './components/PlanDetails';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return {
      <ApolloProvider client={client}>
        <Router>
          <div className='flex-column justify-flex-start min-100-vh'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/myPlans' element={<MyPlans />} />
              <Route path='/allPlans' element={<AllPlans />} />
              <Route path='/createPlan' element={<CreatePlan />} />
              <Route path='updatePlan/:id' element={<UpdatePlan />} />
              <Route path='planDetails/:id' element={<PlanDetails />} />
              <Route
                path='*'
                element={<h1 className='display-2'>Wrong page!</h1>}
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    };
    }

export default App;