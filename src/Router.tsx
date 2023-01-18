import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout></DefaultLayout>}>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/checkout" element={<Checkout></Checkout>}></Route>
			</Route>
		</Routes>
	)
}
