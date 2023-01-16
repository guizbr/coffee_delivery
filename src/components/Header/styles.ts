import styled from 'styled-components'

export const HeaderContainer = styled.header`
	width: 100%;
	height: 6rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	nav {
		display: flex;
		gap: 0.75rem;

		a:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
			padding: 0.5rem;

			background: #ebe5f9;
			border-radius: 6px;

			font-size: 0.75rem;
			line-height: 1.25rem;

			color: #4b2995;
		}

		a:nth-child(2) {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem;

			background: #f1e9c9;
			border-radius: 6px;

			color: #c47f17;
		}
	}
`
