import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import AboutImage from '../components/pages-parts/AboutImage';
const About = () => {
	const [state] = useState({
		heading: 'about us',
		pageHeading: 'best place company to start your travel journey',
		message:
			'We start just like and idea, trying to connect with people and make them to complete, the most excited journey of their life, here our goal is to make you feel like this is the right choice since the beginnig and there is not better place than be here.',
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>About page</title>
				<meta name='description' content='frinedlyplace about page' />
			</Helmet>
			<PageContainer data={state}>
				<AboutImage />
			</PageContainer>
		</>
	);
};
export default About;
