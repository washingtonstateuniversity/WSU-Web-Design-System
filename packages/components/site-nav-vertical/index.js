import React, { Component } from 'react';
import wsu_bt_vertical_nav from '@wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav';
import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';

import './style.scss';

class SiteNavVertical extends Component {

	componentDidMount() {
		const nav_vert_wrapper = document.querySelector('.wsu-s-nav-vertical__wrapper');

		if (typeof nav_vert_wrapper != "undefined" && nav_vert_wrapper != null) {

			/**
			 *
			 * Init JS
			 *
			 */
			nav_vert_wrapper.classList.remove('wsu-u-no-js');

			/**
			 *
			 * Init vertical nav
			 *
			 */
			wsu_wds.vertical_nav = new wsu_bt_vertical_nav({
				nav_item_selector: '.wsu-s-nav-vertical__nav-link',
				nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
				nav_panel_selector: '.wsu-s-nav-vertical__wrapper',
				nav_list_container_selector: '.wsu-s-nav-vertical__nav-list',
				show_logs: true,
				start_collapsed_width: 1360
			});

			wsu_wds.vertical_nav.init();

			/**
			 *
			 * Close Button
			 *
			 */
			const close_link = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');

			close_link.addEventListener('click', function (e) {
				e.preventDefault();
				wsu_wds.vertical_nav.close_panel();
			});

		}
	}
	
	render() {

		return (
			<div className="wsu-s-nav-vertical__wrapper wsu-u-no-js">
				<nav className="wsu-s-nav-vertical__nav-container" aria-label="Vertical Site Navigation">
					<a href="#" className="wsu-s-nav-vertical__nav-container-close-link">
						<span className="wsu-icon wsu-i-x-close"></span>
						<span className="wsu-s-nav-vertical__nav-container-close-label">Close</span>
					</a>
					<ul className="wsu-s-nav-vertical__nav-list-container" id="wsu-s-nav-vertical" role="menubar" aria-label="Vertical Site Navigation">
						<li className="wsu-s-nav-vertical__nav-item" role="none">
							<a href="/demo/dist/index.html" className="wsu-s-nav-vertical__nav-link wsu-s-nav-vertical__nav-link--active">Home</a>
						</li>
						<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
							<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Components</a>
							<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">All Components</a>
								</li>
								<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Global Components</a>
									<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-global-footer.html" className="wsu-s-nav-vertical__nav-link">Global Footer</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-global-header.html" className="wsu-s-nav-vertical__nav-link">Global Header</a>
										</li>
									</ul>
								</li>
								<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Site Components</a>
									<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-site-header.html" className="wsu-s-nav-vertical__nav-link">Site Header</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-site-footer.html" className="wsu-s-nav-vertical__nav-link">Site Footer</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-site-nav-vertical.html" className="wsu-s-nav-vertical__nav-link">Site Nav Vertical</a>
										</li>
									</ul>
								</li>
								<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Content Components</a>
									<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-article-copy.html" className="wsu-s-nav-vertical__nav-link">Article Copy</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-article-footer.html" className="wsu-s-nav-vertical__nav-link">Article Footer</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-article-header.html" className="wsu-s-nav-vertical__nav-link">Article Header</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-button.html" className="wsu-s-nav-vertical__nav-link">Buttons</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-card.html" className="wsu-s-nav-vertical__nav-link">Cards</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-column.html" className="wsu-s-nav-vertical__nav-link">Columns</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-form.html" className="wsu-s-nav-vertical__nav-link">Forms</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-heading.html" className="wsu-s-nav-vertical__nav-link">Headings</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-hero.html" className="wsu-s-nav-vertical__nav-link">Hero Banner</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-icons.html" className="wsu-s-nav-vertical__nav-link">Icons</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-link.html" className="wsu-s-nav-vertical__nav-link">Links</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-list.html" className="wsu-s-nav-vertical__nav-link">List</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="/demo/dist/component-content-paragraph.html" className="wsu-s-nav-vertical__nav-link">Paragraph</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
							<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem" aria-haspopup="true" aria-expanded="true">Page Types</a>
							<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="/demo/dist/content-article-bundle.html" className="wsu-s-nav-vertical__nav-link">Article/Blog Post</a>
								</li>
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">Dolor Sit Amet</a>
								</li>
								<li className="wsu-s-nav-vertical__nav-item--has-children" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">Second Level Nav Item</a>
									<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="#" className="wsu-s-nav-vertical__nav-link">Third Level Nav Item 1</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="#" className="wsu-s-nav-vertical__nav-link--active">Third Level Nav Item 2</a>
										</li>
										<li className="wsu-s-nav-vertical__nav-item" role="none">
											<a href="#" className="wsu-s-nav-vertical__nav-link">Third Level Nav Item 3</a>
										</li>
									</ul>
								</li>
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">Adipiscing Elit</a>
								</li>
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">Sed Mollis Ipsum</a>
								</li>
								<li className="wsu-s-nav-vertical__nav-item" role="none">
									<a href="#" className="wsu-s-nav-vertical__nav-link">Sed Mollis Ipsum</a>
								</li>
							</ul>
						</li>
						<li className="wsu-s-nav-vertical__nav-item" role="none">
							<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem">Metus lorem</a>
						</li>
						<li className="wsu-s-nav-vertical__nav-item" role="none">
							<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem">Egestas nulla</a>
						</li>
					</ul>
				</nav>
				<button className="wsu-s-nav-vertical__menu-icon-link" aria-haspopup="true" aria-expanded="true">
					<div className="wsu-s-nav-vertical__menu-icon-container">
						<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
						<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
						<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
					</div>
					<span className="wsu-s-nav-vertical__menu-label"></span>
				</button>
			</div>
		);
	}
}

SiteNavVertical.defaultProps = {
	showSearch: true,
}



export default SiteNavVertical;