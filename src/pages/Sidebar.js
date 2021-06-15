import React, { useState } from 'react';
import { radioOptions, textOptions } from '../components/question';
import '../style.css';
import './Navbar.css';

const Sidebar = ({ sidebar }) => {
	const [selected, setSelected] = useState('');

	const onValueChange = (e) => {
		setSelected(e.target.value);
	};
	return (
		<>
			<div
				className={sidebar ? 'nav-menu active container' : 'nav-menu container'}
				style={{ width: '36%', float: 'right', border: '1px solid transparent', background: 'white' }}
			>
				<article style={{ background: 'none' }}>
					<div className="row">
						<div className="col-10">
							<h5>Add Question</h5>
						</div>
						<div className="col-2">
							<span className="material-icons" style={{ float: 'right' }}>
								clear
							</span>
						</div>
					</div>
					<hr></hr>
					<div className="row">
						<div className="col-12">
							<p className="fw-bold fs-6">SECTION</p>
							<select
								className="form-select"
								searchable="search here..."
								aria-label="Default select example"
								style={{ width: '250px' }}
							>
								<option selected>Category</option>
								<option value="1">Engineering</option>
								<option value="2">Civil Services</option>
								<option value="3">Logical Reasoning</option>
								<option value="4">Verbal Ability</option>
								<option value="5">General Science</option>
								<option value="6">World Geography</option>
								<option value="7">Medical/Science</option>
							</select>
						</div>
					</div>{' '}
					<br></br>
					<div className="row">
						<div className="col-12">
							<p className="fw-bold fs-6">QUESTION TYPE</p>

							{radioOptions.map((option, index) => {
								return (
									<div className="form-check form-check-inline" key={option.text}>
										<input
											className="form-check-input"
											type="radio"
											name={option.text}
											id={index}
											value={selected === option.text}
											checked={option.clicked}
											onChange={onValueChange}
										/>
										<label className="form-check-label fw-bold" htmlFor={index}>
											{option.text}
										</label>
									</div>
								);
							})}
						</div>
					</div>
					<br></br>
					<div className="row">
						<div className="col-12">
							<p className="fw-bold fs-6">QUESTION</p>
							<div className="form-floating">
								<textarea
									className="form-control"
									placeholder="Leave a comment here"
									id="floatingTextarea2"
									style={{ height: '130px', width: '300px' }}
								></textarea>
							</div>
						</div>
					</div>
					<br></br>
					<div className="row">
						<div class="col-12">
							<p class="fw-bold fs-6">ANSWERS</p>
						</div>
					</div>
					<div class="row m-2" style={{ border: '2px solid grey', backgroundColor: 'whitesmoke' }}>
						{textOptions.map((text, index) => {
							return (
								<div class="col-6 pr-3 pl-3 pt-2 pb-2">
									<label htmlFor="exampleFormControlInput1" className="form-label">
										{text.list}
									</label>
									<input type="email" className="form-control" id="exampleFormControlInput1" />
								</div>
							);
						})}
					</div>
					<br></br>
					<div className="row">
						<div className="col-12">
							<p className="fw-bold fs-6">MARKS</p>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								style={{ width: '250px' }}
							/>
						</div>
					</div>
					<br></br>
					<hr></hr>
					<div className="row">
						<div className="col-12" style={{ textAlign: 'end' }}>
							<button type="button" className="btn btn-secondary" style={{ marginRight: '10px' }}>
								Save
							</button>
							<button type="button" className="btn btn-primary">
								<span className="material-icons btn-icon">add</span>Save and Next
							</button>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};

export default Sidebar;
