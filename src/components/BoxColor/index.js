import React from 'react';
import { Box, Label } from './styles';

function BoxColor({ rgb }) {
	function um2dois(value) {
		let result = value.toString(16);
		result = result.length === 1 ? 0 + result : result;
		return result;
	}

	return (
		<Box color={[rgb.red, rgb.green, rgb.blue]}>
			<Label>
				#{um2dois(rgb.red)}
				{um2dois(rgb.green)}
				{um2dois(rgb.blue)}
			</Label>
			<Label>
				RGB({rgb.red}, {rgb.green}, {rgb.blue})
			</Label>
		</Box>
	);
}

export default BoxColor;
