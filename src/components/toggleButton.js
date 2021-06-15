import React from 'react';

const toggleButton = () => {
	return (
		<div>
			<div className="col-sm-12">
				<p className="fw-bold">QUESTIONS PROPERTIES</p>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Shuffle questions
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
				</div>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Shuffle answer options
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
				</div>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Display result at end of the test
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
				</div>
			</div>
			<div className="col-sm-12 mt-4">
				<p className="fw-bold">PROCTORING</p>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Switch tab allowed
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
				</div>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Video monitoring
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
				</div>
				<div className="form-check form-switch">
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Voice monitoring
					</label>
					<input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
				</div>
			</div>
		</div>
	);
};

export default toggleButton;
