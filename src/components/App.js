import { Component } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer';
import ShoppingList from './ShoppingList.js'

class App extends Component{
render(){
	return (
		<div>
			<Banner />
			<Cart />
			<ShoppingList />
			<Footer />
		</div>
	);
}
}

export default App