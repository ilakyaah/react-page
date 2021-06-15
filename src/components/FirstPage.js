import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image/download.jpg';
import Navbar from './Navbar';
import '../style.css';

const FirstPage = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<section className="py-5">
				<div className="container py-5 ">
					<h2 className="text-center">Welcome Admin</h2>
					<p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
				</div>
				<div className="row">
					<div className="col-6">
						<Link to="/test" style={{ textDecoration: 'none' }}>
							<div className="card card-1" style={{ width: '18rem', float: 'right' }}>
								<div className="card-body">
									<h5 className="card-title text-center mb-4">
										<img
											height="80px"
											width="80px"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlqa7Kso7R6Tvu9hPCHUqgTSOWhu6C_pdnw&usqp=CAU"
											alt="test"
										/>
									</h5>
									<h4 className="card-text text-center" style={{ color: 'black' }}>
										Test
									</h4>
									<p className="text-center">
										No. of test conducted : <span style={{ color: 'teal' }}>6</span>
									</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-6">
						<div className="card card-1" style={{ width: '18rem' }}>
							<Link to="/questionbank" style={{ textDecoration: 'none' }}>
								<div className="card-body">
									<h5 className="card-title text-center mb-4">
										<img
											style={{ borderRadius: '50%' }}
											height="80px"
											width="80px"
											src={image}
											alt="question bank"
										/>
									</h5>
									<h4 className="card-text text-center" style={{ color: 'black' }}>
										Question bank
									</h4>
									<p className="text-center">
										Uploaded documents : <span style={{ color: 'palevioletred' }}>253</span>
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FirstPage;
