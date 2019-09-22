import styled from 'styled-components';

export const Box = styled.div`
	background-color: ${props =>
		`rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})` || '#fff'};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 180px;
	height: 180px;
	box-shadow: 5px 5px 9px 0px rgba(0, 0, 0, 0.5);
	margin: 0 auto;
`;
export const Label = styled.p`
	color: #715fc1;
	font-size: 14pt;
`;
