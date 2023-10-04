import React, {component} from 'react';


function Card({name, DOB, id, Phone}) {
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200` } />
			<div>
				<h2>{name}</h2>
				<p>{DOB}</p>
				<p>{Phone}</p>
			</div>

		</div>
		)
}

export default Card