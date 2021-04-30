import styled from 'styled-components';

type Props = {
	drumType: string;
	onClick: () => void;
};

const StyledDrum = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: darkslategray;
	filter: drop-shadow() 2px 2px 2px black;
	cursor: pointer;
	border: 5px solid black;
	transition: all 0.1s;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	text-transform: capitalize;

	:active {
		background-color: darkgrey;
		transform: scale(0.9);
	}

	@media (max-width: 700px) {
		width: 100px;
		height: 100px;
	}
`;

const Drum: React.FC<Props> = ({ drumType, onClick }) => {
	return (
		<StyledDrum onClick={onClick}>
			<p>{drumType}</p>
		</StyledDrum>
	);
};

export default Drum;
