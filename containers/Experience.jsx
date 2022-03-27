import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
	return (
		<section className="section section-lg">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="ni ni-briefcase-24 text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-2 text-info m-0">Experience</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{experience.map((data, i) => {
							return <ExperienceCard key={i} data={data} />;
						})}
					</Row>
				</Fade>
			</Container>
			{/*<div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignContent:"center", margin:"0 5%"}}>*/}
			{/*	/!*<Fade bottom duration={1000} distance="40px">*!/*/}
			{/*		<div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start",alignContent:"center", margin:"30px"}}>*/}
			{/*			<div>*/}
			{/*				<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">*/}
			{/*					<i className="ni ni-briefcase-24 text-info" />*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*			<div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignContent:"center"}}>*/}
			{/*				<h4 className="display-3 text-info">Experience</h4>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly",alignContent:"center" ,margin:"1% 1%",flexWrap:"wrap"}}>*/}
			{/*			{experience.map((data, i) => {*/}
			{/*				return <ExperienceCard key={i} data={data} />;*/}
			{/*			})}*/}
			{/*		</div>*/}
			{/*	/!*</Fade>*!/*/}
			{/*</div>*/}
		</section>
	);
};

export default Experience;
