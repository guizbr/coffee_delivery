import { Coffee } from '../../../@types/Coffee'
import {
	BuyContainer,
	CartButton,
	CoffeeCard,
	InfoContainer,
	QuantityInput,
	TagsContainer,
} from './styles'

import Expresso from '../../../../uploads/Expresso.svg'

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
					<span>9,90</span>
					<QuantityInput type="number"></QuantityInput>
					<CartButton type="button"></CartButton>
				</BuyContainer>
			</CoffeeCard>
		</div>
	)
}
