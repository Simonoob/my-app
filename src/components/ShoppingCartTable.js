import { useAtom } from 'jotai'
import { shoppingCartItemsAtom } from '../state/atoms'
import ModifyItemModal from './ModifyItemModal'

const ShoppingCartTable = () => {
	const [cartItems, setCartItems] = useAtom(shoppingCartItemsAtom)

	return (
		<div className="overflow-x-auto overflow-y-auto max-h-96 outline outline-1 outline-gray-500 rounded-lg">
			<table className="table w-full">
				<thead className="sticky top-0">
					<tr>
						<th>Name</th>
						<th className="text-center">Amount</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>

				<tbody>
					{!!cartItems.length ? (
						cartItems.map(item => (
							<tr key={item.name}>
								<td className="w-2/3 max-w-xs overflow-hidden text-ellipsis">
									{item.name}
								</td>
								<td className="text-center w-1/3">
									{item.amount}
								</td>
								<td className="text-center w-1/3 grid gap-y-2">
									<ModifyItemModal item={item} />
									<button
										className="btn btn-error btn-sm"
										onClick={() =>
											setCartItems(prevItems =>
												prevItems.filter(
													prevItem =>
														prevItem !== item,
												),
											)
										}
									>
										Remove
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td>
								No products available 😔
								<br /> Add items via the form below 🛒
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default ShoppingCartTable
