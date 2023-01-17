import { Coffee } from '../../../@types/Coffee'
import {
	ActionContainer,
	BuyContainer,
	CartButton,
	CoffeeCard,
	InfoContainer,
	ListContainer,
	QuantityInput,
	TagsContainer,
	WrapperQuantityInput,
} from './styles'

import { ShoppingCart, Plus, Minus } from 'phosphor-react'

interface CoffeeListProps {
	coffees: Coffee[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
	function handleDown(inputName: string) {
		const input = document.querySelector(
			`input[name="input_${inputName}"]`,
		) as HTMLInputElement

		if (input !== null) {
			const calc = parseInt(input.value) - 1 < 0 ? 0 : parseInt(input.value) - 1
			input.value = calc.toString()
		}
	}

	function handleUp(inputName: string) {
		const input = document.querySelector(
			`input[name="input_${inputName}"]`,
		) as HTMLInputElement

		if (input !== null) {
			const calc =
				parseInt(input.value) + 1 > 99 ? 99 : parseInt(input.value) + 1
			input.value = calc.toString()
		}
	}

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
						alt={`Imagem ${coffee.imagePath}`}
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
						<ActionContainer>
							<WrapperQuantityInput>
								<button
									type="button"
									onClick={() =>
										handleDown(`${coffee.name.trim().toLocaleLowerCase()}`)
									}
								>
									<Minus size={14} weight="bold"></Minus>
								</button>
								<QuantityInput
									name={`input_${coffee.name.trim().toLocaleLowerCase()}`}
									type="number"
									value={0}
									step={1}
									min={0}
									max={99}
									readOnly
								></QuantityInput>
								<button
									type="button"
									onClick={() =>
										handleUp(`${coffee.name.trim().toLocaleLowerCase()}`)
									}
								>
									<Plus size={14} weight="bold"></Plus>
								</button>
							</WrapperQuantityInput>
							<CartButton type="button">
								<ShoppingCart size={22} weight="fill"></ShoppingCart>
							</CartButton>
						</ActionContainer>
					</BuyContainer>
				</CoffeeCard>
			))}
		</ListContainer>
	)
}
