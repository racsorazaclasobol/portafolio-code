const Header = () => {
    return (
        <>
            <header>
				<div className="col-md-12">
					<div className="card card-body bg-secondary">
						<div className="row">
							<div className="col-md-3">
								<img src="/profile.jfif" className="img-fluid"/>
								<div style={{ backgroundColor: 'green', height:'30px',  textAlign: 'center' }}>
									<p style={{ color: 'white', fontWeight:'bold' }}> OPEN TO WORK </p>
								</div>
							</div>
							<div className="col-md-9">
								<div className="row">
									<div className="col-md-6 mt-2">
										<h2>Oscar Alcázar Lobos</h2>
										<h4>Ingeniero en Informática</h4>
										<p className="text-muted"> Personalidad: INTP-A </p>
									</div>
									<div className="col-md-6">
										<p className="text-muted"> Correo: oscar.alcazar.lobos@gmail.com </p>
										<p className="text-muted"> Fono: +56 9 40758145 </p>
										<p className="text-muted"> Chile, Región Metropolitana, Maipú. </p>
									</div>
								</div>
								<hr />
								<p>
								Persona respetuosa, con muchas ganas de seguir aprendiendo y certificarme en las distintas tecnologías que mi puesto requiera para poder entregar lo mejor de mí. Soy adaptable a distintos grupos de trabajo y/o situaciones de presión y/o relajo. 
Cuento con experiencia en varios entornos de desarrollo, siendo Javascript, Typescript, React y Node, actualmente mi mayor fortaleza. Tengo la capacidad de crear proyectos Frontend y Backend. Conectarlos a través de APIs y desarrollarlos con código limpio, ordenado y con principios de programación SOLID.


								</p>
							</div>
						</div>
					</div>
				</div>
			</header>
        </>
    )
}

export default Header;