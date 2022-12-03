import React from 'react';

const InteractionResult = ({interaction}) => {

	const buildInteractionResult = (interaction) => { 
		const timestamp = new Date(interaction.timestamp).toLocaleString();
		switch (interaction.type) {
			case 'PAGE_VISIT':
				return (
					<p>Visited {interaction.target} at {timestamp}</p>
				)
			case 'HOVER':
				return (
					<p>Hovered over {interaction.target} for {interaction.item} at {timestamp} for {interaction.duration / 1000} seconds</p>
				)
			case 'CLICK':
				return (
					<p>Clicked on {interaction.target} for {interaction.item} at {timestamp}</p>
				)
			default:
				return (
					<p>Unknown interaction at {timestamp}</p>
				)
		}
	}

	return(
		<div>
			{
				buildInteractionResult(interaction)
			}
		</div>
	)
}

export default InteractionResult;
