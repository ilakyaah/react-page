import React from 'react';
import image from '../image/download.jpg';
import '../style.css';

const SecondNav = () => {
	return (
		<section>
			<div className="row topnav">
				<div className="col-lg-12" style={{ background: 'whitesmoke' }}>
					<nav className="navbar navbar-expand-sm  justify-content-center">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link  fw-normal fs-3 "
									href="/"
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
										style={{ borderRadius: '50%', marginRight: '6px' }}
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
	);
};

export default SecondNav;
