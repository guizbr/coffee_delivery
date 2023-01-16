export interface Coffee {
	_id: string
	name: string
	description: string
	price: number
	imagePath: string
	tags: {
		name: string
	}[]
}
