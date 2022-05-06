import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			filter: "all"
		};

		this.changeFilter = this.changeFilter.bind(this);
	}

	changeFilter(type) {
		this.setState((state) => {
			return {
				data: state.data,
				filter: type
			};
		});
		console.log(type);
	}

	componentDidMount() {
		const dataURL =
			"https://raw.githubusercontent.com/Kamjue/react-filter/main/products.json";
		let req = new XMLHttpRequest();
		req.open("GET", dataURL, true);
		req.onload = () => {
			this.setState({ data: JSON.parse(req.responseText) });
			console.log(this.state);
		};
		req.send();
	}

	render() {
		return (
			<div id="product-app">
				<div id="nav-wrapper">
					<h1 id="title">Products filter</h1>
					<hr id="separator" />
					<ul id="filter-buttons">
						<li>
							<button onClick={() => this.changeFilter("all")}>All</button>
						</li>
						<li>
							<button onClick={() => this.changeFilter("phone")}>Phones</button>
						</li>
						<li>
							<button onClick={() => this.changeFilter("laptop")}>Laptop</button>
						</li>
					</ul>
				</div>
				<ul id="product-items">
					{this.state.data
						.filter((item, key) => {
							if (this.state.filter === "all") {
								return true;
							}
							return this.state.filter === item.type;
						})
						.map((item, key) => {
							return (
								<li key="key" class="p-item">
									<img src={item.image} class="p-img" />
									<div class="p-desc">
										<p>{item.name}</p> <p class="p-price">{" $" + item.price}</p>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		);
	}
}

//ReactDOM.render(<Root />, document.getElementById("root"));


export default Root;
