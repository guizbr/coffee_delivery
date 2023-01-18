import { Coffee } from '../../../@types/Coffee'
import { ActionCart } from '../../../components/ActionCart'

import {
	BuyContainer,
	CoffeeCard,
	InfoContainer,
	ListContainer,
	TagsContainer,
} from './styles'

interface CoffeeListProps {
	coffees: Coffee[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
	function formatterPrice(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(value)
	}

	return (
		<ListContainer>
			{coffees.map((coffee) => (
				<CoffeeCard key={coffee._id}>
					<img
						src={`../../../../uploads/${coffee.imagePath}`}
						alt={`Imagem ${coffee.name}`}
					></img>

					<TagsContainer>
						{coffee.tags.map((tag, index) => (
							<span key={index}>{tag.name}</span>
						))}
					</TagsContainer>

					<InfoContainer>
						<h3>{coffee.name}</h3>
						<p>{coffee.description}</p>
					</InfoContainer>

					<BuyContainer>
						<span>
							<small>R$</small>
							{formatterPrice(coffee.price)}
						</span>
						<ActionCart coffeeName={coffee.name} addOrRemove="add"></ActionCart>
					</BuyContainer>
				</CoffeeCard>
			))}
		</ListContainer>
	)
}
