import styled from 'styled-components'

export const HeaderContainer = styled.div`
	width: 100%;
	background: #fafafa;
	position: fixed;
	z-index: 9999;
`

export const HeaderContent = styled.header`
	max-width: 76rem;
	padding: 2rem 1rem;
	margin: 0 auto;

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
			position: relative;

			background: #f1e9c9;
			border-radius: 6px;

			color: #c47f17;

			span {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				padding: 0px;

				position: absolute;
				width: 20px;
				height: 20px;
				right: -8.35px;
				top: -8px;

				background: #c47f17;
				border-radius: 1000px;

				font-weight: 700;
				font-size: 0.75rem;

				text-align: center;

				color: #ffffff;
			}
		}
	}
`
