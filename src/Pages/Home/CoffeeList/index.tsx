import { Coffee } from '../../../@types/Coffee'
import {
	ActionContainer,
	BuyContainer,
	CartButton,
	CoffeeCard,
	InfoContainer,
	QuantityInput,
	TagsContainer,
	WrapperQuantityInput,
} from './styles'

import Expresso from '../../../../uploads/Expresso.svg'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

interface CoffeeListProps {
	coffees: Coffee[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
	return (
		<div>
			<CoffeeCard>
				<img src={Expresso} alt="Imagem Expresso"></img>

				<TagsContainer>
					<span>Tradicional</span>
				</TagsContainer>

				<InfoContainer>
					<h3>Expresso Tradicional</h3>
					<p>O tradicional café feito com água quente e grãos moídos</p>
				</InfoContainer>

				<BuyContainer>
					<span>
						<small>R$</small>9,90
					</span>
					<ActionContainer>
						<WrapperQuantityInput>
							<button type="button">
								<Minus size={14} weight="bold"></Minus>
							</button>
							<QuantityInput
								name="input_expresso"
								type="number"
								readOnly
							></QuantityInput>
							<button type="button">
								<Plus size={14} weight="bold"></Plus>
							</button>
						</WrapperQuantityInput>
						<CartButton type="button">
							<ShoppingCart size={22} weight="fill"></ShoppingCart>
						</CartButton>
					</ActionContainer>
				</BuyContainer>
			</CoffeeCard>
		</div>
	)
}
