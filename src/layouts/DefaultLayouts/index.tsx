import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
	return (
		<>
			<Header></Header>
			<LayoutContainer>
				<Outlet></Outlet>
			</LayoutContainer>
		</>
	)
}
