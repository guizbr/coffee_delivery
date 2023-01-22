import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Header() {
	const { coffees, address } = useContext(OrderContext)

	const totalCoffees = coffees.reduce((acc, coffeeItem) => {
		return acc + coffeeItem.quantity
	}, 0)

	return (
		<HeaderContainer>
			<HeaderContent>
				<NavLink to="/" title="Home">
					<img src={logoCoffee} alt=""></img>
				</NavLink>

				<nav>
					<NavLink to="/checkout" title="Localização">
						<MapPin size={22} weight="fill"></MapPin>
						{address !== null
							? `${address.cidade}, ${address.uf}`
							: 'Sem local'}
					</NavLink>
					<NavLink to="/checkout" title="Carrinho de compras">
						<ShoppingCart size={22} weight="fill"></ShoppingCart>
						{totalCoffees > 0 && <span>{totalCoffees}</span>}
					</NavLink>
				</nav>
			</HeaderContent>
		</HeaderContainer>
	)
}
