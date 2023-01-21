import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPinLine, CurrencyDollar, Money } from 'phosphor-react'
import { ActionCart } from '../../components/ActionCart'
import { OrderContext } from '../../context/OrderContext'
import {
	AbstractCoffeeCard,
	Address,
	AddressContainer,
	Bill,
	BillContainer,
	Checkbox,
	CheckoutContainer,
	ConfirmButton,
	Delivery,
	HeaderContainer,
	InfoContainer,
	ItemsTotal,
	ListContainer,
	OrderContainer,
	Payable,
	PaymentContainer,
	PaymentMethod,
	TotalPayableContainer,
} from './styles'

export function Checkout() {
	const navigate = useNavigate()
	const {
		coffees,
		submitAddress,
		submitMethodPayment,
		submitTimeDelivery,
		handleResetCoffees,
	} = useContext(OrderContext)
	const [cep, setCep] = useState('')
	const [rua, setRua] = useState('')
	const [numero, setNumero] = useState('')
	const [complemento, setComplemento] = useState('')
	const [bairro, setBairro] = useState('')
	const [cidade, setCidade] = useState('')
	const [uf, setUf] = useState('')
	const [pagamento, setPagamento] = useState(0)

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-br', {
			style: 'currency',
			currency: 'BRL',
		}).format(value)
	}

	const deliveryValue = 3.5
	const itemsValue = coffees.reduce((acc, coffeeItem) => {
		return acc + coffeeItem.quantity * coffeeItem.coffee.price
	}, 0)
	const total = itemsValue + deliveryValue

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const newAddress = {
			cep,
			rua,
			numero,
			complemento,
			bairro,
			cidade,
			uf,
		}

		try {
			submitAddress(newAddress)
			submitMethodPayment(pagamento)
			submitTimeDelivery(30)
			handleResetCoffees()
			navigate('/success')
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<main>
			<CheckoutContainer onSubmit={handleSubmit}>
				<OrderContainer>
					<h1>Complete seu perfil</h1>

					<AddressContainer>
						<HeaderContainer>
							<MapPinLine size={22} color="#C47F17"></MapPinLine>
							<div>
								<h2>Endereço de Entrega</h2>
								<p>Informe o endereço onde deseja receber seu pedido</p>
							</div>
						</HeaderContainer>

						<Address>
							<input
								name="cep"
								value={cep}
								onChange={(e) => setCep(e.target.value)}
								type="text"
								placeholder="CEP"
								style={{ maxWidth: 200 }}
							></input>
							<input
								name="rua"
								value={rua}
								onChange={(e) => setRua(e.target.value)}
								type="text"
								placeholder="Rua"
							></input>
							<div>
								<input
									name="numero"
									value={numero}
									onChange={(e) => setNumero(e.target.value)}
									type="text"
									placeholder="Número"
									style={{ flexBasis: 200, flexShrink: 0 }}
								></input>
								<div className="input-optional-wrapper">
									<input
										name="complemento"
										value={complemento}
										onChange={(e) => setComplemento(e.target.value)}
										type="text"
										placeholder="Complemento"
									></input>
								</div>
							</div>
							<div>
								<input
									name="bairro"
									value={bairro}
									onChange={(e) => setBairro(e.target.value)}
									type="text"
									placeholder="Bairro"
									style={{ flexGrow: 1, flexBasis: 200, flexShrink: 0 }}
								></input>
								<input
									name="cidade"
									value={cidade}
									onChange={(e) => setCidade(e.target.value)}
									type="text"
									placeholder="Cidade"
									style={{ flexGrow: 1, flexBasis: 200 }}
								></input>
								<input
									name="uf"
									value={uf}
									onChange={(e) => setUf(e.target.value)}
									type="text"
									placeholder="UF"
									style={{ maxWidth: 60 }}
									maxLength={2}
								></input>
							</div>
						</Address>
					</AddressContainer>

					<PaymentContainer>
						<HeaderContainer>
							<CurrencyDollar size={22} color="#8047F8"></CurrencyDollar>
							<div>
								<h2>Pagamento</h2>
								<p>
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</p>
							</div>
						</HeaderContainer>

						<PaymentMethod>
							<Checkbox>
								<input
									type="radio"
									name="payment"
									value={1}
									checked={pagamento === 1}
									onChange={(e) => setPagamento(Number(e.target.value))}
								></input>
								<span>
									<Money size={22} color="#8047F8"></Money>Cartão de crédito
								</span>
							</Checkbox>
							<Checkbox>
								<input
									type="radio"
									name="payment"
									value={2}
									checked={pagamento === 2}
									onChange={(e) => setPagamento(Number(e.target.value))}
								></input>
								<span>
									<Money size={22} color="#8047F8"></Money>cartão de débito
								</span>
							</Checkbox>
							<Checkbox>
								<input
									type="radio"
									name="payment"
									value={3}
									checked={pagamento === 3}
									onChange={(e) => setPagamento(Number(e.target.value))}
								></input>
								<span>
									<Money size={22} color="#8047F8"></Money>dinheiro
								</span>
							</Checkbox>
						</PaymentMethod>
					</PaymentContainer>
				</OrderContainer>

				<BillContainer>
					<h1>Cafés selecionados</h1>

					<Bill>
						<ListContainer>
							{coffees.map((coffeeItem, index) => (
								<AbstractCoffeeCard key={index}>
									<InfoContainer>
										<img
											src={`../../../uploads/${coffeeItem.coffee.imagePath}`}
											alt={`Imagem ${coffeeItem.coffee.name}`}
										></img>
										<div>
											<span>{coffeeItem.coffee.name}</span>
											<ActionCart
												coffee={coffeeItem.coffee}
												addOrRemove="remove"
											></ActionCart>
										</div>
									</InfoContainer>
									<span>{formatCurrency(coffeeItem.coffee.price)}</span>
								</AbstractCoffeeCard>
							))}
						</ListContainer>
						<TotalPayableContainer>
							<ItemsTotal>
								<span>Total de itens</span>
								<span>{formatCurrency(itemsValue)}</span>
							</ItemsTotal>
							<Delivery>
								<span>Entrega</span>
								<span>
									{formatCurrency(itemsValue !== 0 ? deliveryValue : 0)}
								</span>
							</Delivery>
							<Payable>
								<span>Total</span>
								<span>{formatCurrency(itemsValue !== 0 ? total : 0)}</span>
							</Payable>
						</TotalPayableContainer>
						<ConfirmButton type="submit" disabled={!itemsValue}>
							Confirmar pedido
						</ConfirmButton>
					</Bill>
				</BillContainer>
			</CheckoutContainer>
		</main>
	)
}
