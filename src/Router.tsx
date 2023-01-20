import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Success } from './Pages/Success'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout></DefaultLayout>}>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/checkout" element={<Checkout></Checkout>}></Route>
				<Route path="/success" element={<Success></Success>}></Route>
			</Route>
		</Routes>
	)
}
