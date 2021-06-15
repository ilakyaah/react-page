import React, { useState } from 'react';
import './Navbar.css';
import ToggleButton from '../components/toggleButton';

const SecondNavbar = ({ secondsidebar, SecondhandleClose }) => {
	const [submit, setSubmit] = useState('');

	const handleSubmit = () => {
		console.log('submited');
	};
	return (
		<>
			<div
				className={secondsidebar ? 'nav-menu active container' : 'nav-menu container'}
				style={{ width: '35%', float: 'right', border: '1px solid transparent' }}
			>
				<div className="row mt-3">
					<div className="col-9">
						<h5>Test settings</h5>
					</div>
					<div className="col-3">
						<button className="btn btn-secondary" type="button" onClick={SecondhandleClose}>
							<span class="material-icons" style={{ float: 'right' }}>
								clear
							</span>
						</button>
					</div>
				</div>
				<hr style={{ border: '1px solid grey' }}></hr>
				<div className="row">
					<div className="col-sm-12">
						<p className="fw-bold fs-6">TEST LINK</p>
						<div className="input-group">
							<span className="input-group-text">http://</span>
							<input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
							<span className="input-group-text material-icons">content_copy</span>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-sm-12">
						<p className="fw-bold">VIEW PERMISSION</p>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
								checked
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								All
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Selected users
							</label>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<ToggleButton />
				</div>
				<div className="row">
					<div className="col-sm-12">
						<p className="fw-bold"> TEST ACTIVATION</p>
						<label htmlFor="exampleInputEmail1" className="form-label">
							Start date&time
						</label>
						<input
							type="date"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							style={{ width: '250px' }}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-sm-12">
						<label htmlFor="exampleInputEmail1" className="form-label">
							End date&time
						</label>
						<input
							type="date"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							style={{ width: '250px' }}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-sm-12">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Test duration
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							style={{ width: '100px' }}
						/>
					</div>
				</div>
				<footer className="mt-3" style={{ textAlign: 'end' }}>
					<button type="button" className="btn btn-secondary" style={{ marginRight: '5px' }}>
						Cancel
					</button>
					<button type="button" className="btn btn-primary" onClick={handleSubmit}>
						Done
					</button>
				</footer>
			</div>
		</>
	);
};

export default SecondNavbar;
