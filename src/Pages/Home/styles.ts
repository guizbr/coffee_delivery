import styled from 'styled-components'

import Vector1 from '../../assets/shapesLayerBlur/Vector1.svg'
import Vector2 from '../../assets/shapesLayerBlur/Vector2.svg'
import Vector3 from '../../assets/shapesLayerBlur/Vector3.svg'
import Vector4 from '../../assets/shapesLayerBlur/Vector4.svg'
import Vector5 from '../../assets/shapesLayerBlur/Vector5.svg'
import Vector6 from '../../assets/shapesLayerBlur/Vector6.svg'
import Vector7 from '../../assets/shapesLayerBlur/Vector7.svg'
import Vector8 from '../../assets/shapesLayerBlur/Vector8.svg'
import Vector9 from '../../assets/shapesLayerBlur/Vector9.svg'
import Vector10 from '../../assets/shapesLayerBlur/Vector10.svg'
import Vector11 from '../../assets/shapesLayerBlur/Vector11.svg'

export const IntroContainer = styled.section`
	display: flex;
	align-items: center;
	gap: 3.5rem;
	position: relative;

	margin: 5.75rem 0;

	img {
		z-index: 1;
	}
`

export const IntroDescription = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 800;
		font-size: 3rem;
		line-height: 3.875rem;

		color: #272221;

		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
		line-height: 1.625rem;

		color: #403937;
	}
`

export const ItemsContainer = styled.div`
	display: flex;
	gap: 2.5rem;
	margin-top: 4.125rem;
`

export const BaseItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	line-height: 1.3125rem;

	color: #574f4d;

	div {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		span {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem;

			border-radius: 1000px;

			color: #fafafa;
		}
	}
`

export const BackgroundLayerBlur = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;

	span {
		position: absolute;
		background-repeat: no-repeat;
		filter: blur(80px);
	}

	span:nth-child(1) {
		left: -11.3%;
		top: 43%;
		width: 272px;
		height: 205px;
		background-image: url(${Vector1});
	}

	span:nth-child(2) {
		left: 35%;
		top: 10%;
		width: 573px;
		height: 92px;
		background-image: url(${Vector2});
	}

	span:nth-child(3) {
		left: 48.2%;
		top: 49%;
		width: 311px;
		height: 179px;
		background-image: url(${Vector3});
	}

	span:nth-child(4) {
		left: 70%;
		top: 46%;
		width: 403px;
		height: 199px;
		background-image: url(${Vector4});
	}

	span:nth-child(5) {
		left: -6.2%;
		top: 5%;
		width: 193px;
		height: 200px;
		background-image: url(${Vector5});
	}

	span:nth-child(6) {
		left: 99%;
		top: 80%;
		width: 192px;
		height: 112px;
		background-image: url(${Vector6});
	}

	span:nth-child(7) {
		left: 95.5%;
		top: 4%;
		width: 246px;
		height: 166px;
		background-image: url(${Vector7});
	}

	span:nth-child(8) {
		left: 46%;
		top: 24%;
		width: 230px;
		height: 110px;
		background-image: url(${Vector8});
	}

	span:nth-child(9) {
		left: 59%;
		top: 22%;
		width: 227px;
		height: 198px;
		background-image: url(${Vector9});
	}

	span:nth-child(10) {
		left: 0%;
		top: 51%;
		width: 426px;
		height: 198px;
		background-image: url(${Vector10});
	}

	span:nth-child(11) {
		left: 66%;
		top: 7%;
		width: 620px;
		height: 306px;
		background-image: url(${Vector11});
	}
`

export const CoffeeListContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.125rem;

	header {
		display: flex;
		align-items: center;
		margin-top: 2rem;
		margin-bottom: 2.125rem;

		h2 {
			font-family: 'Baloo 2', sans-serif;
			font-weight: 800;
			font-size: 2rem;
			line-height: 2.625rem;

			color: #403937;
		}
	}
`
