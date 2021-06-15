import React, { useState } from 'react';
import '../style.css';
import QuestionPage from './QuestionPage';

const SecondColumn = () => {
	return (
		<div>
			<div className="row">
				<div className="col-sm-9">
					<h5 style={{ textAlign: 'center', paddingTop: '5px' }}>JAVA INTERVIEW</h5>
				</div>
				<div className="col-sm-3" style={{ textAlign: 'end' }}>
					<div className="d-grid gap-2 d-md-block">
						<button className="btn btn-primary" type="button">
							<span className="material-icons btn-icon">add</span>Create new test
						</button>
					</div>
				</div>
			</div>
			<hr></hr>
			<div className="row">
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
					<button className="btn btn-secondary" style={{ marginRight: '5px' }} type="button">
						Test Settings
					</button>
					<button className="btn btn-secondary" type="button">
						Select Questions
					</button>
				</div>
			</div>
			<QuestionPage />
		</div>
	);
};
export default SecondColumn;
