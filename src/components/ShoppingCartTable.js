const ShoppingCartTable = () => {
	const dummyItems = [
		{
			name: 'Usnea subfusca Stirt.',
			amout: 58,
		},
		{
			name: 'Acalypha indica L.',
			amout: 49,
		},
		{
			name: 'Coprosma pubens A. Gray',
			amout: 17,
		},
		{
			name: 'Juglans major (Torr.) A. Heller',
			amout: 11,
		},
		{
			name: 'Callirhoe involucrata (Torr. & A. Gray) A. Gray var. lineariloba (Torr. & A. Gray) A. Gray',
			amout: 69,
		},
		{
			name: 'Dicliptera krugii Urb.',
			amout: 60,
		},
		{
			name: 'Stewartia ovata (Cav.) Weath.',
			amout: 3,
		},
		{
			name: 'Cylindropuntia ramosissima (Engelm.) F.M. Knuth',
			amout: 23,
		},
		{
			name: 'Mimulus layneae (Greene) Jeps.',
			amout: 90,
		},
		{
			name: 'Marshallia mohrii Beadle & F.E. Boynt.',
			amout: 32,
		},
		{
			name: 'Carex limosa L.',
			amout: 3,
		},
		{
			name: 'Ulota hutchinsiae (Sm.) Hammar var. rufescens (E. Britton) Dix.',
			amout: 10,
		},
		{
			name: 'Sonchus arvensis L. ssp. uliginosus (M. Bieb.) Nyman',
			amout: 49,
		},
		{
			name: 'Juncus arcticus Willd. ssp. alaskanus Hultén',
			amout: 81,
		},
		{
			name: 'Chorizanthe wheeleri S. Watson',
			amout: 74,
		},
		{
			name: 'Astragalus humistratus A. Gray var. sonorae (A. Gray) M.E. Jones',
			amout: 61,
		},
		{
			name: 'Claytonia parviflora Douglas ex Hook.',
			amout: 48,
		},
		{
			name: 'Salix pseudomyrsinites Andersson',
			amout: 10,
		},
		{
			name: 'Oenothera pilosella Raf.',
			amout: 22,
		},
		{
			name: 'Cladina terrae-novae (Ahti) Hale & W.L. Culb.',
			amout: 3,
		},
	]

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
					{dummyItems.map(item => (
						<tr key={item.name}>
							<td>{item.name}</td>
							<td className="text-center">{item.amout}</td>
							<td className="text-center">
								<button className="btn btn-error btn-sm">
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ShoppingCartTable
