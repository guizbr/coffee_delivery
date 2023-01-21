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
	methodPayent: number
	timeDelivery: number
	handleAddToCart: (coffee: Coffee) => void
	handleDecrementCartItem: (coffee: Coffee) => void
	handleRemoveCartItem: (coffeeId: string) => void
	submitAddress: (address: Address) => void
	submitMethodPayment: (method: number) => void
	submitTimeDelivery: (time: number) => void
	handleResetCoffees: () => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
	children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
	const [coffees, setCoffees] = useState<CoffeeCart[]>([])
	const [address, setAddress] = useState<Address | null>(null)
	const [methodPayent, setMethodPayent] = useState(0)
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

	function handleDecrementCartItem(coffee: Coffee) {
		setCoffees((prevState) => {
			const itemIndex = prevState.findIndex(
				(coffeeItems) => coffeeItems.coffee._id === coffee._id,
			)
			const item = prevState[itemIndex]
			const newCartCoffees = [...prevState]

			if (item.quantity === 1) {
				newCartCoffees.splice(itemIndex, 1)

				return newCartCoffees
			}

			newCartCoffees[itemIndex] = {
				...item,
				quantity: item.quantity - 1,
			}

			return newCartCoffees
		})
	}

	function handleRemoveCartItem(coffeeId: string) {
		setCoffees((prevState) =>
			prevState.filter((coffeeItem) => coffeeItem.coffee._id !== coffeeId),
		)
	}

	function handleResetCoffees() {
		setCoffees([])
	}

	function submitAddress(address: Address) {
		setAddress(address)
	}

	function submitMethodPayment(method: number) {
		setMethodPayent(method)
	}

	function submitTimeDelivery(time: number) {
		setTimeDelivery(time)
	}

	return (
		<OrderContext.Provider
			value={{
				coffees,
				address,
				methodPayent,
				timeDelivery,
				handleAddToCart,
				handleDecrementCartItem,
				handleRemoveCartItem,
				submitAddress,
				submitMethodPayment,
				submitTimeDelivery,
				handleResetCoffees,
			}}
		>
			{children}
		</OrderContext.Provider>
	)
}
