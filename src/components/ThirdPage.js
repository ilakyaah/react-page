import React, { useState } from 'react';
import SecondNav from './SecondNav';
import { radioOptions, textOptions } from './question';
import '../style.css';

const ThirdPage = () => {
	const [selected, setSelected] = useState('');

	const onValueChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<div className="container-fluid" style={{ background: '#ccc' }}>
			<SecondNav />
			<section className="flexbox">
				<div className="py-5 m-5 left-side">
					<div className="container py-5">
						<h4 className="text-center">
							<span class="material-icons" style={{ fontSize: '70px' }}>
								hide_source
							</span>
						</h4>
						<p className="text-center" style={{ fontSize: '20px' }}>
							Yet no records added
						</p>
						<div className="d-grid gap-2 d-md-block text-center">
							<button className="btn btn-primary " type="button" style={{ marginRight: '10px' }}>
								<span className="material-icons btn-icon">add</span>Add Questions
							</button>
							<button className="btn btn-success" type="button">
								<span className="material-icons btn-icon">cloud_upload</span>Upload Questions
							</button>
						</div>
					</div>
				</div>

				<article>
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
			</section>
		</div>
	);
};

export default ThirdPage;
