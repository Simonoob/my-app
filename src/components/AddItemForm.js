const AddItemForm = () => {
	return (
		<div>
			<h2 className="text-lg mb-4 font-bold">Add new Products</h2>
			<div className="flex w-full justify-between gap-x-6">
				<input
					type="text"
					placeholder="Name"
					className="input input-bordered border-dashed w-2/3"
				/>
				<input
					type="number"
					placeholder="Type here"
					className="input input-bordered border-dashed w-full max-w-xs"
				/>
				<button className="btn btn-outline">Add</button>
			</div>
		</div>
	)
}

export default AddItemForm
