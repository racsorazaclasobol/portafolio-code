import Header from "../components/Header";
import PortafolioLayout from "../layout/PortafolioLayout";
import { misProyectos } from '../data/proyectos'

const proyectos = () => {

	return (

		<PortafolioLayout>
					
			<Header />

			<div className="row py-2">
                <div className="col-md-12">
					<div className="card card-body bg-dark" style={{ minHeight:'500px' }}>
						<div className="row justify-content-center" >
							<div className="col-md-12 py-4">
								<h1 className="text-center text-light"> Proyectos </h1>
							</div>

							<div className="col-md-12 py-4">
								<h3 className="text-light"> Personales </h3>
							</div>

							{
								misProyectos.filter( ({ tipo }) => tipo === 'personal' ).map( (proyecto, index) => (

									<div key={ index } className="card col-md-3 mx-3 mt-3">

										<div className="card-body" style={{  maxHeight: '70px' }}>
											<h5 className="card-title">{ proyecto.nombre }</h5>
											<h6 className="card-subtitle text-muted">{ proyecto.subtitulo }</h6>
										</div>

										<div>
											{
												( proyecto.imagen !== '' )
												? ( <div className="d-flex align-items-center" style={{ backgroundColor:'#000',  height:'200px' }}> <img src={ proyecto.imagen } style={{ width: '100%' }} /> </div>)
												: (
													<svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize:'1.125rem', textAnchor:'middle'}}>
														<rect width="100%" height="100%" fill="#00000"></rect>
														<text x="50%" y="50%" fill="#dee2e6" dy=".3em">{ proyecto.nombre }</text>
													</svg>
												)
											}
											
										</div>
										

										<div className="card-body">
											<p className="card-text" style={{ whiteSpace: 'break-spaces' }}>{ proyecto.descripcion }</p>
										</div>
										<div className="container-fluid">

										</div>
										<div className="card-footer container-fluid row justify-content-center" >

											<div className="col-lg-6">
												<a href={ proyecto.enlace } className='padding-right w-100' target='_blank' style={{ textDecoration:'none', fontSize: '15px', color:'white', fontWeight:'bold' }}>
													<button className="btn btn-success"> Visitar </button>	
												</a>
											</div>
											
												{
													( proyecto.repositorio !== '' )
													? ( 
														<div className="col-lg-6">
															<a href={ proyecto.repositorio } className="padding-right " target='_blank' style={{ textDecoration:'none', fontSize: '15px', fontWeight: 'bolder' }}>
																<button className="btn btn-primary"> Repositorio </button>
															</a> 
														</div>	
													)
													: ( <></> )
												}
										</div>
									</div>	
									
								))
							}

							<div className="col-md-12 py-4 pt-5">
								<h3 className="text-light"> Cursos & Prácticas </h3>
							</div>

							{
								misProyectos.filter( ({ tipo }) => tipo === 'cursos' ).map( (proyecto, index) => (

									<div key={ index } className="card col-md-3 mx-3 mt-3">

										<div className="card-body" style={{  maxHeight: '70px' }}>
											<h5 className="card-title">{ proyecto.nombre }</h5>
											<h6 className="card-subtitle text-muted">{ proyecto.subtitulo }</h6>
										</div>

										<div>
											{
												( proyecto.imagen !== '' )
												? ( <div className="d-flex align-items-center" style={{ backgroundColor:'#000',  height:'200px' }}> <img src={ proyecto.imagen } style={{ width: '100%' }} /> </div>)
												: (
													<svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize:'1.125rem', textAnchor:'middle'}}>
														<rect width="100%" height="100%" fill="#00000"></rect>
														<text x="50%" y="50%" fill="#dee2e6" dy=".3em">{ proyecto.nombre }</text>
													</svg>
												)
											}
											
										</div>
										

										<div className="card-body">
											<p className="card-text" style={{ whiteSpace: 'break-spaces' }}>{ proyecto.descripcion }</p>
										</div>
										<div className="container-fluid">

										</div>
										<div className="card-footer container-fluid row justify-content-center" >

											<div className="col-lg-6">
												<a href={ proyecto.enlace } className='padding-right w-100' target='_blank' style={{ textDecoration:'none', fontSize: '15px', color:'white', fontWeight:'bold' }}>
													<button className="btn btn-success"> Visitar </button>	
												</a>
											</div>
											
												{
													( proyecto.repositorio !== '' )
													? ( 
														<div className="col-lg-6">
															<a href={ proyecto.repositorio } className="padding-right " target='_blank' style={{ textDecoration:'none', fontSize: '15px', fontWeight: 'bolder' }}>
																<button className="btn btn-primary"> Repositorio </button>
															</a> 
														</div>	
													)
													: ( <></> )
												}
										</div>
									</div>	
									
								))
							}
												
						</div>
					</div>
				</div>
			</div>
			
			
		</PortafolioLayout>
	)
}

export default proyectos;