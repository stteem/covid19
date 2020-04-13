import React, { Component } from 'react';


class Footer extends Component {

	render() {
		return(
			<div>
				<h5>References</h5>
				<ul>
				<li>19.7 years is the AVG age in Africa - <a href="https://www.worldometers.info/world-population/africa-population/">worldometers.info</a></li>
				<li>AVG daily income is ~$5 for 85% of Africans - <a href="https://blogs.worldbank.org/opendata/85-africans-live-less-550-day">blogs.worldbank.org</a></li>
				<li>COVID-19 infections doubles every 3 days. Expect 50x (at least 10x) reported cases to be actual
					number of infected people - <a href="https://medium.com/@Jason_Scott_Warner/the-sober-math-everyone-must-understand-about-the-pandemic-2b0145881993">Jason S. Warner</a></li>
				</ul>
			</div>
		);
	}
}

export default Footer;