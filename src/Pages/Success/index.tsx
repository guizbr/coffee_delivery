import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import motorbike from '../../assets/Illustration.svg'
import { OrderContext } from '../../context/OrderContext'

import {
	Address,
	DeliveryForecast,
	MotoImageContainer,
	OrderConfirmedContainer,
	OrderInfo,
	PaymentDelivery,
} from './styles'

export function Success() {
	const { address, methodPayent, timeDelivery } = useContext(OrderContext)
	return (
		<main>
			<OrderConfirmedContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>

				<div>
					<OrderInfo>
						<Address>
							<span style={{ background: '#8047F8' }}>
								<MapPin size={16} weight="fill"></MapPin>
							</span>
							<span>
								Entrega em{' '}
								<b>
									{address?.rua}, {address?.numero}
								</b>
								<br></br>
								{address?.bairro} - {address?.cidade}, {address?.uf}
							</span>
						</Address>
						<DeliveryForecast>
							<span style={{ background: '#DBAC2C' }}>
								<Timer size={16} weight="fill"></Timer>
							</span>
							<span>
								Previsão de entrega<br></br>
								<b>{timeDelivery} min</b>
							</span>
						</DeliveryForecast>
						<PaymentDelivery>
							<span style={{ background: '#C47F17' }}>
								<CurrencyDollar size={16}></CurrencyDollar>
							</span>
							<span>
								Pagamento na entrega<br></br>
								{methodPayent === 1 && <b>Cartão de Crédito</b>}
								{methodPayent === 2 && <b>Cartão de débito</b>}
								{methodPayent === 3 && <b>Dinheiro</b>}
							</span>
						</PaymentDelivery>
					</OrderInfo>

					<MotoImageContainer>
						<img
							src={motorbike}
							alt="Homem pilotando uma moto com a entrega"
						></img>
					</MotoImageContainer>
				</div>
			</OrderConfirmedContainer>
		</main>
	)
}
