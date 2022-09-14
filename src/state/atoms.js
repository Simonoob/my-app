import { atom } from 'jotai'
import { possibleItems, randomIntInRange } from './utils'

const defaultItems = (() => {
	const initialItems = []
	const totalItems = randomIntInRange(5, 15)
	for (let i = 0; i < totalItems; i++) {
		const chosenItemIndex = randomIntInRange(0, possibleItems.length - 1)
		initialItems.push(possibleItems[chosenItemIndex])
		possibleItems.splice(chosenItemIndex, 1)
	}
	return initialItems
})()

export const shoppingCartItemsAtom = atom(defaultItems)
