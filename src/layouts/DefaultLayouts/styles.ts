import styled from 'styled-components'

export const LayoutContainer = styled.div`
	max-width: 76rem;
	width: 100%;
	padding: 0 1rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;

	@media (max-width: 376px) {
		padding: 0;
	}
`
