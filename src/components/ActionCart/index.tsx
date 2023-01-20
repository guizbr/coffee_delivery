import { ShoppingCart, Plus, Minus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Coffee } from '../../@types/Coffee'
import { OrderContext } from '../../context/OrderContext'

import {
	ActionContainer,
	CartButton,
	QuantityInput,
	RemoveButton,
	WrapperQuantityInput,
} from './styles'

interface ActionCartProps {
	coffee: Coffee
	addOrRemove: 'add' | 'remove'
}

export function ActionCart({ coffee, addOrRemove }: ActionCartProps) {
	const { coffees, handleAddToCart } = useContext(OrderContext)

	function handleDown(inputName: string) {
		const input = document.querySelector(
			`input[name="input_${inputName}"]`,
		) as HTMLInputElement

		if (input !== null) {
			const calc = parseInt(input.value) - 1 < 0 ? 0 : parseInt(input.value) - 1
			input.value = calc.toString()
		}
	}

	const coffeeQuantity = coffees.find(
		(coffeeItems) => coffeeItems.coffee._id === coffee._id,
	)?.quantity

	const quantity = coffeeQuantity === undefined ? 0 : coffeeQuantity

	return (
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
					value={quantity}
					step={1}
					min={0}
					max={99}
					readOnly
				></QuantityInput>
				<button type="button" onClick={() => handleAddToCart(coffee)}>
					<Plus size={14} weight="bold"></Plus>
				</button>
			</WrapperQuantityInput>
			{addOrRemove === 'add' ? (
				<CartButton type="button">
					<ShoppingCart size={22} weight="fill"></ShoppingCart>
				</CartButton>
			) : (
				<RemoveButton>
					<Trash size={18} color="#8047f8"></Trash>
					REMOVER
				</RemoveButton>
			)}
		</ActionContainer>
	)
}
