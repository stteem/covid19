import React, { Component } from 'react';


class Footer extends Component {

	render() {
		return(
			<div>
				<h5>References</h5>
				<ul>
				<li>19.7 years is the AVG age in Africa - <a href="www.worldometers.info">worldometers.info</a></li>
				<li>AVG daily income is ~$5 for 85% of Africans - <a href="www.blogs.worldbank.org">blogs.worldbank.org</a></li>
				<li>COVID-19 infections doubles every 3 days. Expect 50x (at least 10x) reported cases to be actual
					number of infected people - Jason S. Warner</li>
				<li>Several stats from Harvard Medical School / Massachusetts General Hospital </li>
				</ul>
			</div>
		);
	}
}

export default Footer;