import { BrowserRouter } from 'react-router-dom'
import { OrderContextProvider } from './context/OrderContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'

export function App() {
	return (
		<>
			<GlobalStyle></GlobalStyle>

			<BrowserRouter>
				<OrderContextProvider>
					<Router></Router>
				</OrderContextProvider>
			</BrowserRouter>
		</>
	)
}
