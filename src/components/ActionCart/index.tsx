import { ShoppingCart, Plus, Minus, Trash } from 'phosphor-react'

import {
	ActionContainer,
	CartButton,
	QuantityInput,
	RemoveButton,
	WrapperQuantityInput,
} from './styles'

interface ActionCartProps {
	coffeeName: string
	addOrRemove: 'add' | 'remove'
}

export function ActionCart({ coffeeName, addOrRemove }: ActionCartProps) {
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

	return (
		<ActionContainer>
			<WrapperQuantityInput>
				<button
					type="button"
					onClick={() => handleDown(`${coffeeName.trim().toLocaleLowerCase()}`)}
				>
					<Minus size={14} weight="bold"></Minus>
				</button>
				<QuantityInput
					name={`input_${coffeeName.trim().toLocaleLowerCase()}`}
					type="number"
					value={0}
					step={1}
					min={0}
					max={99}
					readOnly
				></QuantityInput>
				<button
					type="button"
					onClick={() => handleUp(`${coffeeName.trim().toLocaleLowerCase()}`)}
				>
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
