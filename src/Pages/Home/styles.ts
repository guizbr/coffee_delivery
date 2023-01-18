import styled from 'styled-components'

import BackgroundLayerBlur from '../../assets/BackgroundLayerBlur.svg'

export const IntroContainer = styled.section`
	display: flex;
	align-items: center;
	gap: 3.5rem;

	background-image: url(${BackgroundLayerBlur});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 136.5%;
	box-shadow: inset 0px 0px 25px 25px #fafafa;

	margin-top: 12.5rem;
	margin-bottom: 5.75rem;

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
