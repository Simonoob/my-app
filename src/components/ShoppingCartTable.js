import { useAtom } from 'jotai'
import { shoppingCartItemsAtom } from '../state/atoms'

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
					{!!cartItems ? (
						cartItems.map(item => (
							<tr key={item.name}>
								<td>{item.name}</td>
								<td className="text-center">{item.amount}</td>
								<td className="text-center">
									<button
										className="btn btn-error btn-sm"
										onClick={() =>
											setCartItems(prevItems =>
												prevItems.filter(
													prevItem =>
														prevItem.name !==
														item.name,
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
							<td>Such empty 😿</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default ShoppingCartTable
