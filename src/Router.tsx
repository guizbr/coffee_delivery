import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Home } from './Pages/Home'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout></DefaultLayout>}>
				<Route path="/" element={<Home></Home>}></Route>
			</Route>
		</Routes>
	)
}
