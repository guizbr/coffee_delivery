/* eslint-disable prettier/prettier */
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeCup from '../../assets/CoffeeCup.svg'
import { CoffeeList } from './CoffeeList'

import { mockCoffee } from '../../../mocks/mockCoffee'

import {
	BaseItems,
	IntroContainer,
	IntroDescription,
	ItemsContainer,
	CoffeeListContainer
} from './styles'

export function Home() {

	return (
		<main>
			<IntroContainer>

				<IntroDescription>
					<h2>Encontre o café perfeito para qualquer hora do dia</h2>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>

					<ItemsContainer>
						<BaseItems>
							<div>
								<span style={{ background: "#C47F17" }}>
									<ShoppingCart size={16} weight="fill"></ShoppingCart>
								</span>
								Compra simples e segura
							</div>
							<div>
								<span style={{ background: "#DBAC2C" }}>
									<Timer size={16} weight="fill"></Timer>
								</span>
								Entrega rápida e rastreada
							</div>
						</BaseItems>
						<BaseItems>
							<div>
								<span style={{ background: "#574F4D" }}>
									<Package size={16} weight="fill"></Package>
								</span>
								Embalagem mantém o café intacto
							</div>
							<div>
								<span style={{ background: "#8047F8" }}>
									<Coffee size={16} weight="fill"></Coffee>
								</span>
								O café chega fresquinho até você
							</div>
						</BaseItems>
					</ItemsContainer>
				</IntroDescription>

				<img src={CoffeeCup} alt="Copo de café"></img>
			</IntroContainer>

			<CoffeeListContainer>
				<header>
					<h2>Nossos cafés</h2>
				</header>
				<CoffeeList coffees={mockCoffee}></CoffeeList>
			</CoffeeListContainer>
		</main>
	)
}
