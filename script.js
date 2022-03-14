class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="product-app">
				<h1 id="title">Products filter</h1>
				<ul id="filter-buttons">
					<li>
						<button>All</button>
					</li>
					<li>
						<button>Phones</button>
					</li>
					<li>
						<button>Laptop</button>
					</li>
				</ul>
				<ul id="product-items">
					<li>Laptop 1</li>
					<li>Laptop 2</li>
					<li>Laptop 3</li>
					<li>Phone 1</li>
					<li>Phone 2</li>
					<li>Phone 3</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById("root"));
