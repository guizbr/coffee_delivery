import styled from 'styled-components'

export const ListContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
	margin-bottom: 2rem;
`

export const CoffeeCard = styled.li`
	max-width: 16rem;
	min-width: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.25rem;

	background: #f3f2f2;
	border-radius: 6px 36px;

	img {
		position: relative;
		top: -2.5rem;
		width: 7.5rem;
		height: 7.5rem;
	}
`

export const TagsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.25rem;

	margin-bottom: 1rem;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.25rem 0.5rem;

		background: #f1e9c9;
		border-radius: 100px;

		font-weight: 700;
		font-size: 0.625rem;
		line-height: 0.8125rem;
		text-transform: uppercase;

		color: #c47f17;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 2.0625rem;

	h3 {
		font-family: 'Baloo 2';
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.625rem;
		text-align: center;

		color: #403937;
	}

	p {
		font-size: 0.875rem;
		line-height: 1.125rem;
		text-align: center;

		color: #8d8686;
	}
`

export const BuyContainer = styled.div`
	max-width: 13rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.4375rem;

	span {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1.95rem;

		color: #574f4d;

		small {
			font-family: 'Roboto', sans-serif;
			font-size: 0.875rem;
			line-height: 1.1375rem;
			font-weight: 400;
			margin-right: 0.15rem;
		}
	}
`
export const ActionContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 0.5rem;
`

export const WrapperQuantityInput = styled.div`
	display: flex;
	width: inherit;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;

		background: #e6e5e5;
		color: #8047f8;
	}

	button:nth-child(1) {
		border-radius: 6px 0 0 6px;
		padding: 0.75rem 0.25rem 0.75rem 0.5rem;
	}

	button:nth-child(3) {
		border-radius: 0 6px 6px 0;
		padding: 0.75rem 0.5rem 0.75rem 0.25rem;
	}
`

export const QuantityInput = styled.input`
	width: inherit;
	border: none;
	text-align: center;

	background: #e6e5e5;

	&:hover {
		cursor: default;
	}

	&:focus {
		outline: none;
	}
`

export const CartButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;

	border: none;
	border-radius: 6px;

	background: #4b2995;
	color: #f3f2f2;
`
