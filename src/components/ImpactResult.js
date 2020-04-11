import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


function ImpactResult({estimate}) {

	if (estimate !== null) {
		return(
			<div className="col-12 col-sm-4 col-md-4">
				<Card>
					<CardBody>
						<CardTitle><h4>Impact</h4></CardTitle>
						<CardText>Currently Infected: {estimate.impact.currentlyInfected}</CardText>
						<CardText>Infections By Requested Time: {estimate.impact.infectionsByRequestedTime}</CardText>
						<CardText>Severe Cases By Requested Time: {estimate.impact.severeCasesByRequestedTime}</CardText>
						<CardText>Hospital Beds By Requested Time: {estimate.impact.hospitalBedsByRequestedTime}</CardText>
						<CardText>Cases For ICU By Requested Time: {estimate.impact.casesForICUByRequestedTime}</CardText>
						<CardText>Cases For Ventilators By Requested Time: {estimate.impact.casesForVentilatorsByRequestedTime}</CardText>
						<CardText>Dollars In Flight: {estimate.impact.dollarsInFlight}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
	else {
		return(<div></div>);
	}		
}

export default ImpactResult;