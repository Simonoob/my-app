import { useState } from 'react'
import { useSetAtom } from 'jotai'
import { shoppingCartItemsAtom } from '../state/atoms'
import { sanitizeString } from './utils'
const ModifyItemModal = ({ item }) => {
	const setCartItems = useSetAtom(shoppingCartItemsAtom)
	const [modifiedItem, setModifiedItem] = useState(item)

	const [open, setOpen] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setCartItems(prev => [
			modifiedItem,
			...prev.filter(oldItem => oldItem !== item),
		])
		setOpen(false)
	}

	return (
		<div>
			<button
				className="btn btn-secondary btn-sm"
				onClick={() => setOpen(true)}
			>
				Modify
			</button>
			{open && (
				<>
					<div
						className=" fixed top-0 left-0 right-0 bottom-0 bg-base-300 opacity-60 cursor-pointer z-10"
						onClick={() => setOpen(false)}
					></div>
					<form
						className="grid gap-10 z-10 fixed top-1/2 left-1/2 p-10 w-full max-w-xl bg-base-100 rounded-2xl -translate-x-1/2 -translate-y-1/2"
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							placeholder="Name"
							className="input input-bordered border-dashed w-full maw-md"
							required
							maxLength={125}
							value={modifiedItem.name}
							onChange={e => {
								setModifiedItem(prev => ({
									...prev,
									name: sanitizeString(e.target.value),
								}))
							}}
						/>
						<div className="flex gap-x-5">
							<input
								type="number"
								placeholder="Amount"
								className="input input-bordered border-dashed w-full max-w-xs"
								required
								min={0}
								max={100}
								value={modifiedItem.amount}
								onChange={e =>
									setModifiedItem(prev => ({
										...prev,
										amount: Number(e.target.value),
									}))
								}
							/>
							<button className="btn btn-outline" type="submit">
								Commit changes
							</button>
						</div>
					</form>
				</>
			)}
		</div>
	)
}

export default ModifyItemModal
