import React, { Component } from 'react';
import Header from './Header';
import ImpactForm from './ImpactForm';


class Main extends Component {

	render() {
		return(
			<div>
				<Header />
				<ImpactForm />
			</div>

		);
	}
}

export default Main;