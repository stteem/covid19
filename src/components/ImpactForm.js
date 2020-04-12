import React, { Component } from 'react';
import { Button } from 'reactstrap';
import covid19ImpactEstimator from '../calculator/estimate.js';
import ImpactResult from './ImpactResult';
import SevereImpact from './SevereImpact';


const DATA = {
				region: {
					name: "",
					avgAge: null,
					avgDailyIncomeInUSD: null,
					avgDailyIncomePopulation: null
				},
				periodType: "",
				timeToElapse: null,
				reportedCases: null,
				population: null,
				totalHospitalBeds: null
			};

class ImpactForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
			data:  DATA,
			estimate: null
	    };

	    this.handleClick = this.handleClick.bind(this);
		this.getData = this.getData.bind(this);
	}

	handleClick() {

		this.setState({
			data: {
				region: {
					name: this.region.value,
					avgAge: this.avgAge.value,
					avgDailyIncomeInUSD: this.avgIncomeUsd.value,
					avgDailyIncomePopulation: this.avgIncomePop.value
				},
				periodType: this.periodType.value,
				timeToElapse: this.timeToElapse.value,
				reportedCases: this.reportedCases.value,
				population: this.population.value,
				totalHospitalBeds: this.totalHospitalBeds.value
			}, 
		}, this.getData );
	}

	getData() {
		const result = covid19ImpactEstimator(this.state.data);
		console.log('result ', result)
		this.setState({estimate: result});
	}


	render() {
		return(
			<div className="container">
				<div className="row">
				    <div className="col-12 col-sm-4 col-md-3">
						<form>
							<input type="text" className="form-control" placeholder="Region" data-region ref={(c) => this.region = c} name="region" />
							<input type="text" className="form-control" placeholder="Average Age" data-avg-age ref={(c) => this.avgAge = c} name="avgAge"  />
							<input type="text" className="form-control" placeholder="Average Income USD" data-income ref={(c) => this.avgIncomeUsd = c} name="avgIncomeUsd" />
							<input type="text" className="form-control" placeholder="Average Income Population" data-population ref={(c) => this.avgIncomePop = c} name="avgIncomePop" />
							<select className="form-control" data-period-type ref={(c) => this.periodType = c} name="periodType" >
								<option>Days</option>
								<option>Weeks</option>
								<option>Months</option>
							</select>
							<input type="text" className="form-control" placeholder="Time To Elapse" data-time-to-elapse ref={(c) => this.timeToElapse = c} name="timeToElapse" />
							<input type="text" className="form-control" placeholder="Reported Cases" data-reported-cases ref={(c) => this.reportedCases = c} name="reportedCases" />
							<input type="text" className="form-control" placeholder="Population" data-population ref={(c) => this.population = c} name="population" />
							<input type="text" className="form-control" placeholder="Total Hospital Beds" data-total-hospital-beds ref={(c) => this.totalHospitalBeds = c} name="totalHospitalBeds" />
							
						</form>
						<Button type="button" className="form-control estimate_button" onClick={this.handleClick} data-go-estimate>Go Estimate</Button>
					</div>
					<ImpactResult estimate={this.state.estimate} />
					<SevereImpact estimate={this.state.estimate} />
				</div>
			</div>
		);
	}
}

export default ImpactForm;