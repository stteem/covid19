import React, { Component } from 'react';
import { Card, CardTitle, Button } from 'reactstrap';
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
		this.setState({estimate: result});
	}


	render() {
		return(
			<div className="container">
				<div className="row">
				<div className="intro">
					<h4>COVID-19 Infections And Impact Estimation</h4>
					<p>COVID-19 has been declared a pandemic by WHO. As our contribution to fighting the virus to a standstill, we have used WHO metrics to bulid a tool that
						estimates, and forecast infections impact by region. We hope this will come in handy for all stakeholders. Feel free to input appriopriate data in order to get estimates.</p>
				</div>
				    <div className="col-12 col-md-4">
				    <Card className="main">
				    	<CardTitle className="centre"><h5>Estimation Tool</h5></CardTitle>
						<form>
							<label className="col-12 col-md-12">
							<strong>Region</strong>
							<input type="text" className="form-control" placeholder="Region" data-region ref={(c) => this.region = c} name="region" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Average Age</strong>
							<input type="text" className="form-control" placeholder="Average Age" data-avg-age ref={(c) => this.avgAge = c} name="avgAge"  />
							</label>
							<label className="col-12 col-md-12">
							<strong>Average Income In USD</strong>
							<input type="text" className="form-control" placeholder="Average Income USD" data-income ref={(c) => this.avgIncomeUsd = c} name="avgIncomeUsd" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Average Population Income</strong>
							<input type="text" className="form-control" placeholder="Average Income Population" data-population ref={(c) => this.avgIncomePop = c} name="avgIncomePop" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Days, Weeks Or Months</strong>
							<select className="form-control" data-period-type ref={(c) => this.periodType = c} name="periodType" >
								<option>Days</option>
								<option>Weeks</option>
								<option>Months</option>
							</select>
							</label>
							<label className="col-12 col-md-12">
							<strong>Time To Elapse</strong>
							<input type="text" className="form-control" placeholder="Time To Elapse" data-time-to-elapse ref={(c) => this.timeToElapse = c} name="timeToElapse" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Reported Cases</strong>
							<input type="text" className="form-control" placeholder="Reported Cases" data-reported-cases ref={(c) => this.reportedCases = c} name="reportedCases" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Population</strong>
							<input type="text" className="form-control" placeholder="Population" data-population ref={(c) => this.population = c} name="population" />
							</label>
							<label className="col-12 col-md-12">
							<strong>Total Hospital Beds</strong>
							<input type="text" className="form-control" placeholder="Total Hospital Beds" data-total-hospital-beds ref={(c) => this.totalHospitalBeds = c} name="totalHospitalBeds" />
							</label>
							<div className="col-12 col-md-12">
							<Button type="button" className="form-control estimate_button" onClick={this.handleClick} data-go-estimate >Estimate</Button>
							</div>
						</form>
					</Card>
					</div>
					
					<ImpactResult estimate={this.state.estimate} />
					<SevereImpact estimate={this.state.estimate} />
				</div>
			</div>
		);
	}
}

export default ImpactForm;