import React, { useEffect, useState } from 'react';

import BoxColor from './components/BoxColor';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';

function App() {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	return (
		<div id="caixa">
			<BoxColor rgb={{ red, green, blue }} />
			<Slider min={0} max={255} value={red} onChange={setRed} />
			<Slider min={0} max={255} value={green} onChange={setGreen} />
			<Slider min={0} max={255} value={blue} onChange={setBlue} />
		</div>
	);
}

export default App;
