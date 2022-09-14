import AddItemForm from './AddItemForm'
import Header from './Header'
import ShoppingCartTable from './ShoppingCartTable'

function App() {
	return (
		<main className="py-10 max-w-5xl mx-auto grid gap-y-32">
			<Header />
			<ShoppingCartTable />
			<AddItemForm />
		</main>
	)
}

export default App
