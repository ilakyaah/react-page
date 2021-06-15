import React from 'react';

const Navbar = ({ sidebar, secondsidebar }) => {
	const setStyle = () => {
		let styles = {};
		if (sidebar) {
			const firstStyle = {
				display: 'none',
			};
			styles = Object.assign(styles, firstStyle);
		}
		if (secondsidebar) {
			const secondStyle = {
				display: 'none',
			};
			styles = Object.assign(styles, secondStyle);
		} else {
			const defaultStyle = {
				color: 'white',
			};
			styles = Object.assign(styles, defaultStyle);
		}
		return styles;
	};

	return (
		<div className="row" style={{ background: 'black' }}>
			<div className="col-lg-12">
				<nav className="navbar sticky-top navbar-expand-lg navbar" style={{ float: 'right' }}>
					<div className="container">
						<a className="navbar-brand m-2" href="/">
							<span className="material-icons" style={setStyle()}>
								settings{' '}
							</span>
						</a>
						<a className="navbar-brand m-2" href="/">
							<span className="material-icons" style={setStyle()}>
								power_settings_new
							</span>
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
