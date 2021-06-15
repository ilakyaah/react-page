import React, { useState } from 'react';
import Nav from '../pages/Nav';
import SecondNavbar from '../pages/SecondNavbar';
import QuestionPage from './QuestionPage';

const Home = ({ sidebar, showSidebar, handleClose, showSecondSidebar, secondsidebar, SecondhandleClose }) => {
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
					<button
						className="btn btn-secondary"
						style={{ marginRight: '5px' }}
						type="button"
						onClick={showSecondSidebar}
					>
						Test Settings
					</button>
					<button className="btn btn-secondary" type="button" onClick={showSidebar}>
						Select Questions{' '}
					</button>
				</div>
			</div>
			<Nav sidebar={sidebar} handleClose={handleClose} />
			<SecondNavbar secondsidebar={secondsidebar} SecondhandleClose={SecondhandleClose} />
			<QuestionPage sidebar={sidebar} secondsidebar={secondsidebar} />
		</div>
	);
};

export default Home;
