import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logoCoffee} alt=""></img>

				<nav>
					<NavLink to="/" title="Carrinho de compras">
						<MapPin size={22} weight="fill"></MapPin>
						Sem local
					</NavLink>
					<NavLink to="/" title="Localização">
						<ShoppingCart size={22} weight="fill"></ShoppingCart>
					</NavLink>
				</nav>
			</HeaderContent>
		</HeaderContainer>
	)
}
