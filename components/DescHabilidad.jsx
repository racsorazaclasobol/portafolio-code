const DescHabilidad = ({ habilidad }) => {

    return (

		<>
			<a>
				{ habilidad.nombre }
			</a>

			<div className="progress">
				<div className={`progress-bar ${ habilidad.color } progress-bar-striped progress-bar-animated`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width:`${ habilidad.porcentaje }%` }}></div>
			</div>
			
			<br />
		</>
    )
}

export default DescHabilidad;