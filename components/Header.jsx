const Header = () => {
    return (
        <>
            <header>
				<div className="col-md-12">
					<div className="card card-body bg-secondary">
						<div className="row">
							<div className="col-md-3">
								<img src="/profile.jfif" className="img-fluid"/>
							</div>
							<div className="col-md-9">
								<h2>Oscar Alcázar Lobos</h2>
								<h4>Ingeniero en Informática</h4>
								<p className="text-muted"> Personalidad: INTP-A </p>
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