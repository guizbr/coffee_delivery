import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'

export function App() {
	return (
		<>
			<GlobalStyle></GlobalStyle>

			<BrowserRouter>
				<Router></Router>
			</BrowserRouter>
		</>
	)
}
