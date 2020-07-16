import React, { Component } from 'react';

import './style.scss';

const GlobalFooter = ( props ) => {

	return (
		<div className="wsu-g-footer-wrapper">
			<footer className="wsu-g-footer">
				<div className="wsu-g-footer__copyright">&copy; Washington State University 2019</div>
				<nav className="wsu-g-footer__nav" aria-label="Global Footer Quick Links">
					<ul className="wsu-g-footer__nav-list">
						<li className="wsu-g-footer__nav-item">
							<a className="wsu-g-footer__nav-link" href="#">Access</a>
						</li>
						<li className="wsu-g-footer__nav-item">
							<a className="wsu-g-footer__nav-link" href="#">Policies</a>
						</li>
						<li className="wsu-g-footer__nav-item">
							<a className="wsu-g-footer__nav-link" href="#">MyWSU</a>
						</li>
						<li className="wsu-g-footer__nav-item--show-more">
							<a className="wsu-g-footer__nav-link" href="https://socialmedia.wsu.edu/">
								Follow WSU
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);

}

GlobalFooter.defaultProps = {
    showSearch:true,
}



export default GlobalFooter;