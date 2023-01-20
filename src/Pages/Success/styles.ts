import styled from 'styled-components'

export const OrderConfirmedContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 11.75rem;

	h1 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 800;
		font-size: 2rem;
		line-height: 2.625rem;

		color: #c47f17;
	}

	p {
		font-size: 1.25rem;
		line-height: 1.625rem;

		color: #403937;
		font-stretch: 100;
	}

	> div {
		display: flex;

		align-items: center;
		margin-top: 2.5rem;
		gap: 6.375rem;
	}

	@media (max-width: 426px) {
		> div {
			flex-wrap: wrap;
		}
	}
`

export const MotoImageContainer = styled.div`
	flex-grow: 1;

	img {
		width: 100%;
	}
`

export const OrderInfo = styled.div`
	max-width: 32.875rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: wrap;
	padding: 2.5rem;
	gap: 2rem;

	border-radius: 6px 36px;
	background: linear-gradient(#fafafa, #fafafa) padding-box,
		linear-gradient(to right, #dbac2c, #8047f8) border-box;

	border: 1px solid transparent;
`

export const BaseDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;

	span:nth-child(1) {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;

		border-radius: 1000px;

		color: #fafafa;
	}

	span:nth-child(2) {
		line-height: 1.3125rem;

		color: #574f4d;
	}
`

export const Address = styled(BaseDiv)``

export const DeliveryForecast = styled(BaseDiv)``

export const PaymentDelivery = styled(BaseDiv)``
