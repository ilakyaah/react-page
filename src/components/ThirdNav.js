import React from 'react';

const ThirdNav = () => {
	return (
		<section>
			<div className="container">
				<div className="row mt-5 mb-5">
					<div className="col-sm-4 mb-3">
						<input
							type="text"
							placeholder="&#xF002; Search"
							style={{
								fontFamily: "Arial, 'Font Awesome 5 Free'",
								borderLeft: 'none',
								borderRight: 'none',
								borderTop: 'none',
							}}
							className="no-outline"
						/>
					</div>
					<div className="col-sm-8 mb-3" style={{ textAlign: 'end' }}>
						<button className="btn btn-primary " type="button">
							<span className="material-icons btn-icon">add</span>Create new test
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThirdNav;
