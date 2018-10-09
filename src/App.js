import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Serchresult from './compnents/Serchresult';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentWillMount() {
		fetch("https://pixabay.com/api/?key=10153925-6e740f679cfc06dc467008b48&q=red+flowers&image_type=photo")
		.then(res => res.json())
		.then(
        (result) => {
          this.setState({
            items: result.hits
          });
        },
      )			  
}
  handleSubmit = (e) => {
	    var serach_color = this.refs.search_color.value;
		//this.setState({ color: serach_color});
		fetch("https://pixabay.com/api/?key=10153925-6e740f679cfc06dc467008b48&q="+serach_color+"+flowers&image_type=photo")
		.then(res => res.json())
		.then(
        (result) => {
          this.setState({
            items: result.hits
          });
        },
      )		
	e.preventDefault();
  }			
	
  render() {
    return (
	  <div className="App">
	     <div className="col-12 col-md-10 col-lg-8">
			<form className="card card-sm" onSubmit={this.handleSubmit}>
				<div className="card-body row no-gutters align-items-center">
					<div className="col-auto">
						<i className="fas fa-search h4 text-body"></i>
					</div>
					<div className="col">
						<input className="form-control form-control-lg form-control-borderless" type="search" ref="search_color" placeholder="Color name (eg red,yellow,green)" />
					</div>
					<div className="col-auto">
						<button className="btn btn-lg btn-success" type="submit">Search</button>
					</div>
				</div>
			</form>
		</div>
		<Serchresult color={this.state.color} items= {this.state.items}/>
      </div>
	  
    );
  }
}

export default App;
