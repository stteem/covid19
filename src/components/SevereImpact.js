import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


function SevereImpact({estimate}) {

	if (estimate !== null) {
		return(
			<div className="col-12 col-sm-4 col-md-4">
				<Card>
					<CardBody>
						<CardTitle><h5>Severe Impact</h5></CardTitle>
						<CardText>Currently Infected: {estimate.severeImpact.currentlyInfected}</CardText>
						<CardText>Infections By Requested Time: {estimate.severeImpact.infectionsByRequestedTime}</CardText>
						<CardText>Severe Cases By Requested Time: {estimate.severeImpact.severeCasesByRequestedTime}</CardText>
						<CardText>Hospital Beds By Requested Time: {estimate.severeImpact.hospitalBedsByRequestedTime}</CardText>
						<CardText>Cases For ICU By Requested Time: {estimate.severeImpact.casesForICUByRequestedTime}</CardText>
						<CardText>Cases For Ventilators By Requested Time: {estimate.severeImpact.casesForVentilatorsByRequestedTime}</CardText>
						<CardText>Dollars In Flight: {estimate.severeImpact.dollarsInFlight}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
	else {
		return(<div></div>);
	}		
}

export default SevereImpact;