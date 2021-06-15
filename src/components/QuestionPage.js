import React, { useState } from 'react';
import { qBank } from './question';

const QuestionPage = ({ sidebar, secondsidebar }) => {
	const [selected, setSelected] = useState('');

	const onValueChange = (e) => {
		setSelected(e.target.value);
	};

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
		}
		return styles;
	};

	return (
		<section>
			{qBank.map((question) => {
				return (
					<div className="container" key={question.id}>
						<div className="row mt-4">
							<div className="col-sm-1">
								<span className="fw-bold">{question.id}.</span>
							</div>
							<div className="col-sm-9">
								<span className="fw-bold">{question.question}</span>
							</div>
							<div className="col-sm-2" style={{ textAlign: 'end' }}>
								{' '}
								<span className="material-icons" style={{ color: 'black' }}>
									more_horiz
								</span>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-sm-1"></div>
							<div className="col-sm-11">
								{question.answers.map((answer, index) => {
									return (
										<div
											className="form-check form-check-inline"
											key={answer.text}
											style={{ paddingRight: '30px' }}
										>
											<input
												className="form-check-input"
												type="radio"
												name={answer.text}
												id={index}
												value={selected === answer.text}
												checked={answer.clicked}
												onChange={onValueChange}
											/>
											<label className="form-check-label fw-bold" htmlFor={index}>
												{answer.text}
											</label>
										</div>
									);
								})}
								<hr className="mt-4" style={setStyle()}></hr>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default QuestionPage;
