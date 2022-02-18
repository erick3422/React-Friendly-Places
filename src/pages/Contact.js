import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import ContactForm from '../components/pages-parts/ContactForm';
const Contact = () => {
	const [state] = useState({
		heading: 'contact us',
		pageHeading: 'leave us your message',
		message:
			'Have questions? Want to learn more? We believe is the right time to do it, and we also believe we can help you to achieve that dream of your journey dream, contact us and a member of our team will be in contact with you in short period of time.',
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Contact page</title>
				<meta name='description' content='friendlyplace contact page' />
			</Helmet>
			<PageContainer data={state}>
				<ContactForm />
			</PageContainer>
		</>
	);
};
export default Contact;
