import { useState } from 'react'
import { useAtom } from 'jotai'
import { shoppingCartItemsAtom } from '../state/atoms'
import { sanitizeString } from './utils'

const AddItemForm = () => {
	const [cartItems, setCartItems] = useAtom(shoppingCartItemsAtom)
	const [newItemInfo, setNewItemInfo] = useState({
		name: '',
		amount: 0,
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (cartItems.some(item => item.name === newItemInfo.name))
			return alert('Item already present.')
		setCartItems(prev => [newItemInfo, ...prev])
	}

	return (
		<div>
			<h2 className="text-lg mb-4 font-bold">Add new Products</h2>
			<form
				className="flex w-full justify-between gap-x-6"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Name"
					className="input input-bordered border-dashed w-2/3"
					required
					maxLength={125}
					value={newItemInfo.name}
					onChange={e =>
						setNewItemInfo(prev => ({
							...prev,
							name: sanitizeString(e.target.value),
						}))
					}
				/>
				<input
					type="number"
					placeholder="Amount"
					className="input input-bordered border-dashed w-full max-w-xs"
					required
					min={0}
					max={100}
					onChange={e =>
						setNewItemInfo(prev => ({
							...prev,
							amount: Number(e.target.value),
						}))
					}
				/>
				<button className="btn btn-outline" type="submit">
					Add
				</button>
			</form>
		</div>
	)
}

export default AddItemForm
