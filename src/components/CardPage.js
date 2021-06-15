import React from 'react';
import { Link } from 'react-router-dom';
import { cardList } from './question';
import ThirdNav from './ThirdNav';
import SecondNav from './SecondNav';
import Navbar from './Navbar';

const CardPage = () => {
	return (
		<div>
			<Navbar />
			<SecondNav />
			<section className="mt-5">
				<ThirdNav />
				<div className="container">
					<div className="row">
						{cardList.map((card) => {
							return (
								<div className="col-sm-3 mt-3">
									<Link to="/test/questions" style={{ textDecoration: 'none' }}>
										<div class="card card-1 box card-hover mb-3">
											<div class="card-body p-4">
												<div className="dropdown" style={{ float: 'right' }}>
													<span
														className="material-icons"
														style={{ color: 'black' }}
														type="button"
														id="dropdownMenuButton1"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														more_horiz
													</span>
													<ul
														className="dropdown-menu dropdown-content"
														aria-labelledby="dropdownMenuButton1"
													>
														<li>
															<a className="dropdown-item" href="/">
																Rename
															</a>
														</li>
														<li>
															<a className="dropdown-item" href="/">
																Edit
															</a>
														</li>
														<li>
															<a className="dropdown-item" href="/">
																Delete
															</a>
														</li>
													</ul>
												</div>
												<h5 class="card-title text-center mb-4 mt-5">
													<span
														className="material-icons icon-3"
														style={{ backgroundColor: `${card.color}` }}
													>
														edit
													</span>
												</h5>
												<h5 className="card-text text-center" style={{ color: 'black' }}>
													{card.list}
												</h5>
												<p class="card-text text-center" style={{ color: 'black' }}>
													{card.createdOn}
												</p>
											</div>
											<div class="card-footer bg-transparent fw-bold">
												<span
													style={card.test === 'Open' ? { color: 'green' } : { color: 'red' }}
												>
													{card.test}
												</span>
												<span style={{ float: 'right', color: 'black' }}>{card.marks}</span>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default CardPage;
