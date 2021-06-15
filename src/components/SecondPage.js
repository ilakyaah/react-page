import React, { useState } from 'react';
import '../style.css';
import image from '../image/download.jpg';
import Navbar from './Navbar';
import Sidebar from '../pages/Sidebar';

const SecondPage = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(true);
	return (
		<div className="container-fluid">
			<Navbar sidebar={sidebar} />
			<section>
				<div className="row topnav">
					<div className="col-lg-12" style={{ background: 'whitesmoke' }}>
						<nav className="navbar navbar-expand-sm  justify-content-center">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link fw-normal fs-3 "
										href="#"
										style={{ color: 'black', marginRight: '20px' }}
									>
										<img
											height="30px"
											width="30px"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlqa7Kso7R6Tvu9hPCHUqgTSOWhu6C_pdnw&usqp=CAU"
											alt="test"
										/>{' '}
										Test
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link active fw-normal fs-3"
										href="#"
										style={{ color: 'black', marginRight: '10px' }}
									>
										<img
											style={{ borderRadius: '50%' }}
											height="30px"
											width="30px"
											src={image}
											alt="question bank"
										/>
										Question Bank
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
			<section className="py-5 m-5">
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
						<button
							className="btn btn-primary "
							type="button"
							style={{ marginRight: '10px' }}
							onClick={showSidebar}
						>
							<span className="material-icons btn-icon">add</span>Add Questions
						</button>
						<button className="btn btn-success" type="button">
							<span className="material-icons btn-icon">cloud_upload</span>Upload Questions
						</button>
					</div>
				</div>
			</section>
			<Sidebar sidebar={sidebar} />
		</div>
	);
};

export default SecondPage;
