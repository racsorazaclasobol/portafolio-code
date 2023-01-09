import Header from "../components/Header";
import PortafolioLayout from "../layout/PortafolioLayout";

const proyectos = () => {
	return (

		<PortafolioLayout>
					
			<Header />

			<div className="row py-2">
                <div className="col-md-12">
					<div className="card card-body bg-dark" style={{ minHeight:'500px' }}>
						<div className="row">
							<div className="col-md-12 py-4">
								<h2 className="text-center text-light"> Proyectos </h2>
							</div>

							<div className="card col-md-3">
								<div className="card-body">
									<h5 className="card-title">Special title treatment</h5>
									<h6 className="card-subtitle text-muted">Support card subtitle</h6>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize:'1.125rem', textAnchor:'middle'}}>
									<rect width="100%" height="100%" fill="#868e96"></rect>
									<text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
								</svg>
								<div className="card-body">
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>
								<div className="card-footer text-muted">
									2 days ago
								</div>
							</div>						
						</div>
					</div>
				</div>
			</div>
			
			
		</PortafolioLayout>
	)
}

export default proyectos;