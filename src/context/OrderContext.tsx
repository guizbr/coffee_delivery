import { createContext, ReactNode, useEffect, useState } from 'react'
import { Address } from '../@types/Address'
import { Coffee } from '../@types/Coffee'

interface CoffeeCart {
	coffee: Coffee
	quantity: number
}

interface OrderContextType {
	coffees: CoffeeCart[]
	address: Address | null
	methodPayent: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro' | null
	timeDelivery: number
	handleAddToCart: (coffee: Coffee) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
	children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
	const [coffees, setCoffees] = useState<CoffeeCart[]>([])
	const [address, setAddress] = useState<Address | null>(null)
	const [methodPayent, setMethodPayent] = useState(null)
	const [timeDelivery, setTimeDelivery] = useState(0)

	useEffect(() => {
		console.log(coffees)
	}, [coffees])

	function handleAddToCart(coffee: Coffee) {
		setCoffees((prevState) => {
			const itemIndex = prevState.findIndex(
				(coffeeItems) => coffeeItems.coffee._id === coffee._id,
			)

			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					coffee,
				})
			}

			const newCartCoffees = [...prevState]
			const item = newCartCoffees[itemIndex]

			newCartCoffees[itemIndex] = {
				...item,
				quantity: item.quantity + 1,
			}

			return newCartCoffees
		})
	}

	return (
		<OrderContext.Provider
			value={{
				coffees,
				address,
				methodPayent,
				timeDelivery,
				handleAddToCart,
			}}
		>
			{children}
		</OrderContext.Provider>
	)
}
