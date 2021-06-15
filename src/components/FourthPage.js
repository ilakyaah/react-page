import React from 'react';
import { Link } from 'react-router-dom';
import SecondNav from './SecondNav';
import { questionBank } from './question';
import Navbar from './Navbar';

const FourthPage = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<SecondNav />
			<section>
				<div className="container">
					<div className="row mt-5">
						<div className="col-sm-4 mb-3">
							<h5 className="fw-bold">Number Series-Questions and Answers</h5>
							<p style={{ fontSize: 'small' }}>Home/Question bank/Number series</p>
						</div>
						<div className="col-sm-8 mb-3" style={{ textAlign: 'end' }}>
							<div className="d-grid gap-2 d-md-block">
								<Link to="/addquestions">
									<button className="btn btn-primary " type="button" style={{ marginRight: '10px' }}>
										<span className="material-icons btn-icon">add</span>Add Questions
									</button>
								</Link>
								<button className="btn btn-success" type="button">
									<span className="material-icons btn-icon">cloud_upload</span>Upload Questions
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-3">
				<div className="container">
					<nav className="navbar navbar-expand-sm topnav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link fw-normal active"
									href="#"
									style={{ color: 'black', marginRight: '25px' }}
								>
									Recently added
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link fw-normal"
									href="#"
									style={{ color: 'black', marginRight: '25px' }}
								>
									Top rated
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link fw-normal"
									href="#"
									style={{ color: 'black', marginRight: '25px' }}
								>
									Interview
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link fw-normal"
									href="#"
									style={{ color: 'black', marginRight: '25px' }}
								>
									Documents
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>
			<section className="mt-4">
				{questionBank.map((question) => {
					return (
						<div className="container" key={question.id}>
							<div className="row mt-4">
								<div className="col-sm-1">
									<span className="fw-bold">{question.id}.</span>
								</div>
								<div className="col-sm-11">
									<span className="fw-bold">{question.question}</span>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-sm-1"></div>
								<div className="col-sm-11">
									{question.answers.map((answer, index) => {
										return (
											<span className="fw-bold" style={{ paddingRight: '30px' }} key={index}>
												{answer.text}
											</span>
										);
									})}
									<hr className="mt-4" style={{ border: '1px solid grey' }}></hr>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default FourthPage;

// <div class="container-fluid">

//         <div class="container">
//             <div class="row">
//                 <div class="col-sm-1">
//                     <span class="fw-bold">1.</span>
//                     </div>
//                     <div class="col-sm-11">
//                        <span class="fw-bold">Look at this series:2,1,(1/2),(1/4),... What number should come next?</span>
//                    </div>
//             </div>
//             <div class="row mt-2">
//                 <div class="col-sm-1">
//                 </div>
//                 <div class="col-sm-11">
//                     <span class="fw-bold" style="padding-right: 30px;">A) (1/3)</span>
//                     <span class="fw-bold" style="padding-right: 30px;">B) (1/8)</span>
//                     <span class="fw-bold" style="padding-right: 30px;">C) (2/8)</span>
//                     <span class="fw-bold">D) (1/6)</span>
//                     <hr class="mt-4" style="border: 1px solid grey">
//                 </div>
//             </div>

//             <div class="row mt-2">
//                 <div class="col-sm-1">
//                     <span class="fw-bold">2.</span>
//                 </div>
//                 <div class="col-sm-11">
//                     <span class="fw-bold">Look at this series:7,10,8,11,9,12,...What number should come next?</span>
//                 </div>
//             </div>
//             <div class="row mt-2">
//                 <div class="col-sm-1">
//                 </div>
//                 <div class="col-sm-11">
//                     <span class="fw-bold" style="padding-right: 30px;">A) 7</span>
//                     <span class="fw-bold" style="padding-right: 30px;">B) 10</span>
//                     <span class="fw-bold" style="padding-right: 30px;">C) 12</span>
//                     <span class="fw-bold">D) 13</span>
//                     <hr class="mt-4" style="border: 1px solid grey">
//                 </div>
//             </div>

//             <div class="row mt-2">
//                 <div class="col-sm-1">
//                     <span class="fw-bold">3.</span>
//                 </div>
//                 <div class="col-sm-11">
//                     <span class="fw-bold">Look at this series:36,34,30,28,24... What number should come next?</span>
//                 </div>
//             </div>
//             <div class="row mt-2">
//                 <div class="col-sm-1">
//                 </div>
//                 <div class="col-sm-11">
//                     <span class="fw-bold" style="padding-right: 30px;">A) 20</span>
//                     <span class="fw-bold" style="padding-right: 30px;">B) 22</span>
//                     <span class="fw-bold" style="padding-right: 30px;">C) 23</span>
//                     <span class="fw-bold">D) 26</span>
//                     <hr class="mt-4" style="border: 1px solid grey">
//                 </div>
//             </div>

//         </div>
//     </section>
// </div>
