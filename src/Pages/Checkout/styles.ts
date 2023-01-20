import styled from 'styled-components'

export const CheckoutContainer = styled.form`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	margin-top: 9.25rem;
	margin-bottom: 3rem;

	h1 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		font-size: 1.125rem;
		line-height: 1.4375rem;

		display: flex;
		align-items: center;

		color: #403937;
	}

	@media (max-width: 376px) {
		flex-direction: column;
		flex-wrap: no-wrap;
	}
`

export const OrderContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	flex-grow: 1;
`

export const HeaderContainer = styled.header`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;

		h2 {
			display: flex;
			align-items: center;

			font-size: 1.25rem;
			font-weight: 400;

			color: #403937;
		}

		p {
			display: flex;
			align-items: center;

			font-size: 0.875rem;
			line-height: 1.125rem;

			color: #574f4d;
		}
	}
`

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2.5rem;
	gap: 2rem;

	background: #f3f2f2;
	border-radius: 6px;
`

export const Address = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	input {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0.75rem;

		background: #eeeded;

		border: 1px solid #e6e5e5;
		border-radius: 4px;
	}

	div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.input-optional-wrapper {
		position: relative;
		flex-grow: 1;
		flex-basis: 200px;
	}

	.input-optional-wrapper::after {
		content: 'Opcional';
		display: block;
		margin-left: 0.5rem;
		position: absolute;
		right: 0.75rem;
		top: 50%;
		font-style: italic;
		font-size: 0.75rem;
		transform: translateY(-50%);
		color: #8d8686;
	}
`

export const PaymentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2.5rem;
	gap: 2rem;

	background: #f3f2f2;
	border-radius: 6px;
`

export const PaymentMethod = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: wrap;
`

export const Checkbox = styled.label`
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 180px;

	span {
		display: flex;
		align-items: center;
		padding: 1rem;
		gap: 0.75rem;

		background: #e6e5e5;
		border-radius: 6px;

		text-transform: uppercase;

		font-size: 0.75rem;
		color: #574f4d;

		transition: 0.2s;

		cursor: pointer;
	}

	span:hover {
		background: #d7d5d5;
	}

	input {
		position: absolute;
		visibility: hidden;
	}

	input:checked + span {
		box-sizing: border-box;

		background: #ebe5f9;

		border: 1px solid #8047f8;
	}
`

export const BillContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	flex-grow: 1;
`

export const Bill = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;

	background: #f3f2f2;
	border-radius: 6px 44px;
`

export const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
`

export const AbstractCoffeeCard = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0.25rem 1.9375rem 0.25rem;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;

	border-bottom: 1px solid #e6e5e5;

	> span {
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.3125rem;

		text-align: right;

		color: #574f4d;
	}

	@media (max-width: 426px) {
		> span {
			margin-top: 0.5rem;
		}
	}
`

export const InfoContainer = styled.div`
	display: flex;
	gap: 1.25rem;

	img {
		width: 4rem;
		height: 4rem;
	}

	div {
		span {
			display: flex;
			align-items: center;
			margin-bottom: 0.5rem;
			line-height: 1.3125rem;

			color: #403937;
		}
	}
`

export const TotalPayableContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 1.5rem;
`

export const ItemsTotal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 0.875rem;
		line-height: 1.125rem;

		display: flex;
		align-items: center;
		text-align: right;

		color: #574f4d;
	}
`

export const Delivery = styled(ItemsTotal)``

export const Payable = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.625rem;

		display: flex;
		align-items: center;
		text-align: right;

		color: #403937;
	}
`

export const ConfirmButton = styled.button`
	display: block;
	padding: 0.75rem 0;

	border-radius: 6px;
	border: none;

	font-weight: 700;
	font-size: 0.875rem;
	font-stretch: 100;
	line-height: 1.375rem;

	text-transform: uppercase;

	color: #ffffff;
	background: #dbac2c;
`
