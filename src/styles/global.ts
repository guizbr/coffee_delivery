import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* :focus {
		outline: 0;
		box-shadow: 0 0 0 2px #FFFFFF;
	} */

	body {
		background: #FAFAFA;
		color: #574F4D;
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}

	button {
    cursor: pointer;
	}

	a {
			color: inherit;
			text-decoration: none;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
}
`
