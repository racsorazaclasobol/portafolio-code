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
								Trabajador respetuoso, adaptable a distintos grupos de trabajo y situaciones de presión y/o relajo, empático con sus compañeros, responsable, puntual y apasionado.
Soy una persona tranquila, a la que le gusta leer, aprender, salir y compartir con amigos y familia, puedo comunicarme fácilmente con la gente, lo que me ayuda a crear lazos tanto profesionales como personales. Cuento con metas
claras, con la motivación y perseverancia para cumplir cada una de ellas.

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