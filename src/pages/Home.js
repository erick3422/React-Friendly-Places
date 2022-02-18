import { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../components/Destinations';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import GalleryComponent from '../components/gallery/GalleryComponent';
import Footer from '../components/footer/Footer';
const Home = () => {
	const { dispatch } = useContext(ModelContext);
	const [state] = useState({
		heading: 'The best Friendly Place To Be',
		paragraph:
			'Come and look for the most friendly place of your dreams.',
	});
	const [registerModel] = useState('registerModel');
	const [loginModel] = useState('loginModel');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Friendly Places</title>
				<meta
					name='description'
					content='Come and look for the most friendly place of your dreams'
				/>
				<meta name='keywords' content='travel, travel tours, airline' />
			</Helmet>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button
					className='btn-default'
					onClick={() =>
						dispatch({ type: OPEN_MODEL, payload: registerModel })
					}>
					Start Traveling
				</button>
			</Header>
			<Model current={registerModel}>
				<Register currentModel={loginModel} />
			</Model>
			<Model current={loginModel}>
				<Login currentModel={registerModel} />
			</Model>
			<Destinations />
			<Services />
			<Reviews />
			<GalleryComponent />
			<Footer />
		</>
	);
};
export default Home;
