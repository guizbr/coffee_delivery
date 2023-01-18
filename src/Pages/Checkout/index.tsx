import { MapPinLine, CurrencyDollar, Money } from 'phosphor-react'
import { ActionCart } from '../../components/ActionCart'
import {
	AbstractCoffeeCard,
	Address,
	AddressContainer,
	Bill,
	BillContainer,
	Checkbox,
	CheckoutContainer,
	HeaderContainer,
	InfoContainer,
	ListContainer,
	OrderContainer,
	PaymentContainer,
	PaymentMethod,
} from './styles'

export function Checkout() {
	return (
		<main>
			<CheckoutContainer>
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
								type="text"
								placeholder="CEP"
								style={{ maxWidth: 200 }}
							></input>
							<input type="text" placeholder="Rua"></input>
							<div>
								<input
									type="text"
									placeholder="Número"
									style={{ flexBasis: 200, flexShrink: 0 }}
								></input>
								<div className="input-optional-wrapper">
									<input type="text" placeholder="Complemento"></input>
								</div>
							</div>
							<div>
								<input
									type="text"
									placeholder="Bairro"
									style={{ flexGrow: 1, flexBasis: 200, flexShrink: 0 }}
								></input>
								<input
									type="text"
									placeholder="Cidade"
									style={{ flexGrow: 1, flexBasis: 200 }}
								></input>
								<input
									type="text"
									placeholder="UF"
									style={{ maxWidth: 60 }}
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
								<input type="radio" name="payment" value={1}></input>
								<span>
									<Money size={22} color="#8047F8"></Money>Cartão de crédito
								</span>
							</Checkbox>
							<Checkbox>
								<input type="radio" name="payment" value={2}></input>
								<span>
									<Money size={22} color="#8047F8"></Money>cartão de débito
								</span>
							</Checkbox>
							<Checkbox>
								<input type="radio" name="payment" value={3}></input>
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
							<AbstractCoffeeCard>
								<InfoContainer>
									<img
										src="../../../uploads/Americano.svg"
										alt="Imagem Americano"
									></img>
									<div>
										<span>Expresso Tradicional</span>
										<ActionCart
											coffeeName="Expresso Tradicional"
											addOrRemove="remove"
										></ActionCart>
									</div>
								</InfoContainer>
								<span>R$ 9,90</span>
							</AbstractCoffeeCard>
						</ListContainer>
					</Bill>
				</BillContainer>
			</CheckoutContainer>
		</main>
	)
}
