/**
 * AboutPage.js
 */
import React from 'react';
import Page from './Page';
import { connect } from 'react-redux';

import profileImg from '../../imgs/profilePic.jpg';
import resume from '../../docs/Nicholas-Cannon-CV.pdf';

import './AboutPage.css';

class AboutPage extends React.Component {
	render() {
		return (
			<Page pageName="AboutPage">
				<div>
					<div className="profileImg">
						<img src={profileImg} />
					</div>
					<div className="content">
						<h1>{this.props.heading}</h1>
						<h2>{this.props.subHeading}</h2>
						<p>{this.props.body}</p>
						<br />
						<div className="aboutButtons">
							<a href={resume} target="_blank">
								Resume
							</a>
							<a href="mailto:nicholascannon1@gmail.com" target="_blank">
								Email Me
							</a>
						</div>
					</div>
				</div>
				<div className="rect"></div>
			</Page>
		);
	}
}
const mapStateToProps = state => ({
	heading: state.admin.about.heading,
	subHeading: state.admin.about.subHeading,
	body: state.admin.about.body
});

export default connect(
	mapStateToProps,
	{}
)(AboutPage);
