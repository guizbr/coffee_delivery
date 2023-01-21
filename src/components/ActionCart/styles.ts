import styled from 'styled-components'

export const ActionContainer = styled.div`
	display: flex;
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

	button:hover {
		color: #4b2995;
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
	max-width: 1.375rem;
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

export const CartButton = styled.div`
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;

		border: none;
		border-radius: 6px;

		background: #4b2995;
		color: #f3f2f2;

		transition: 0.2s;

		&:hover {
			background: #8047f8;
		}
	}
`

export const RemoveButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.5rem;
	gap: 0.25rem;

	border: none;
	border-radius: 6px;

	background: #e6e5e5;
	color: #574f4d;

	font-size: 0.85rem;

	transition: 0.2s;

	&:hover {
		background: #d7d5d5;
	}
`
