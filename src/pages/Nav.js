import React, { useState } from 'react';
import './Navbar.css';
import CheckBoxQuestion from '../components/CheckBoxQuestion';

const Nav = ({ sidebar, handleClose }) => {
	return (
		<>
			<div
				className={sidebar ? 'nav-menu active container' : 'nav-menu container'}
				style={{ width: '45%', float: 'right', border: '1px solid transparent' }}
			>
				<div className="row mt-3">
					<div className="col-9">
						<h5>Select Question</h5>
					</div>
					<div className="col-3">
						<button className="btn btn-secondary" type="button" onClick={handleClose}>
							<span className="material-icons" style={{ float: 'right' }}>
								clear
							</span>
						</button>
					</div>
				</div>
				<hr style={{ border: '1px solid grey' }}></hr>
				<div className="row">
					<div className="col-sm-12">
						<p className="fw-bold fs-6">QUESTION BANK</p>
						<select
							className="form-select"
							searchable="search here..."
							aria-label="Default select example"
							style={{ width: '250px' }}
						>
							<option value="0">Select Question Bank</option>
							<option value="1">Engineering</option>
							<option value="2">Civil Services</option>
							<option value="3">Logical Reasoning</option>
							<option value="4">Verbal Ability</option>
							<option value="5">General Science</option>
							<option value="6">World Geography</option>
							<option value="7">Medical/Science</option>
						</select>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-sm-12">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value="checkbox"
								id="flexCheckChecked"
							/>
							<label className="form-check-label" htmlFor="flexCheckChecked">
								Select all questions
							</label>
						</div>
					</div>
					<CheckBoxQuestion />
				</div>
			</div>
		</>
	);
};

export default Nav;
