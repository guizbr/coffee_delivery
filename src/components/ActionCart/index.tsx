import { ShoppingCart, Plus, Minus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
	const {
		coffees,
		handleAddToCart,
		handleDecrementCartItem,
		handleRemoveCartItem,
	} = useContext(OrderContext)

	const coffeeQuantity = coffees.find(
		(coffeeItems) => coffeeItems.coffee._id === coffee._id,
	)?.quantity

	const quantity = coffeeQuantity === undefined ? 0 : coffeeQuantity

	return (
		<ActionContainer>
			<WrapperQuantityInput>
				<button type="button" onClick={() => handleDecrementCartItem(coffee)}>
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
				<CartButton>
					<NavLink to="/checkout" title="Localização">
						<ShoppingCart size={22} weight="fill"></ShoppingCart>
					</NavLink>
				</CartButton>
			) : (
				<RemoveButton
					type="button"
					onClick={() => handleRemoveCartItem(coffee._id)}
				>
					<Trash size={18} color="#8047f8"></Trash>
					REMOVER
				</RemoveButton>
			)}
		</ActionContainer>
	)
}
