import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<NavLink to="/" title="Home">
					<img src={logoCoffee} alt=""></img>
				</NavLink>

				<nav>
					<NavLink to="/success" title="Localização">
						<MapPin size={22} weight="fill"></MapPin>
						Sem local
					</NavLink>
					<NavLink to="/checkout" title="Carrinho de compras">
						<ShoppingCart size={22} weight="fill"></ShoppingCart>
					</NavLink>
				</nav>
			</HeaderContent>
		</HeaderContainer>
	)
}
