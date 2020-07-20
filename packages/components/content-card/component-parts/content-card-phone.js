import React, { Component } from 'react';
import empty from '../../../storybook-components/field-checker';

class ContentCardPhoneNumber extends Component {
	render() {

		if (empty(this.props.phoneNumber)) {
			return null;
		}
		
		return (
			<div className="wsu-c-card__phone">
				<a href={"tel:" + this.props.phoneNumber} className="wsu-c-card__phone-link">{this.props.phoneNumber}</a>
			</div>
		)
	}
}

export default ContentCardPhoneNumber;