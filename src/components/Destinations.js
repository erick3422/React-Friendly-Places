import { useState, useContext } from 'react';
import DestinationsContext from '../context/DestinationsContext';
import DestinationsList from './DestinationsList';
const Destinations = () => {
	const {
		destinationsData: { destinations },
	} = useContext(DestinationsContext);

	const [state] = useState({
		heading:
			'Enjoy of the unique and rich expirience, Share what is to travel around the world.',
		paragraph:
			'Here in friendlyPlaces share what is feel to travel around the world, but also to share it with your friends, you have the unique potencial of living unique expirence that nobody has share, imagine to be in Colombia, or Mexico beach, everything is posible here in friendlyPlaces.',
	});
	return (
		<div className='destinations'>
			<div className='container'>
				<div className='row ml-minus-15 mr-minus-15'>
					<div className='col-6 p-15'>
						<h3 className='destinations__heading animation'>{state.heading}</h3>
					</div>
					<div className='col-6 p-15'>
						<p className='destinations__paragraph animation'>
							{state.paragraph}
						</p>
					</div>
				</div>
				<div className='destinations__block'>
					<div className='row ml-minus-15 mr-minus-15'>
						{destinations.map((destination) => (
							<DestinationsList
								destination={destination}
								key={destination.id}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Destinations;
