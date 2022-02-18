import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const FooterIntro = () => {
	const [state] = useState({
		logo: '/assets/footer/logo.png',
		intro:
			'Friendlyplaces is a tour agency that pick the best cities of the world, so you can have a unique experience, we have start this company since 2007 and could not feel more proud about it.',
	});
	return (
		<div className='footer__intro'>
			<div className='footer__intro__img animation'>
				<LazyLoadImage src={state.logo} alt='footer logo' />
			</div>
			<p className='footer__intro__msg animation'>{state.intro}</p>
		</div>
	);
};
export default FooterIntro;
