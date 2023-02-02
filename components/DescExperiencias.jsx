
export const DescExperiencias = ( {experiencia} ) => {
    const { titulo, empresa, descripcion, link, tecnologias, duracion } = experiencia
  return (
    <>
        <div className="card border-light mb-3">
            <div className="card-header">
                <h5>{ titulo }</h5>
                <h6>{ empresa }</h6>
                <small className="text-muted">{ duracion }</small>
            </div>
            <div className="card-body" style={{ marginTop: '-20px' }}>
                <p className="card-text" style={{ whiteSpace: 'break-spaces' }}> { descripcion } </p>
                
                {
                ( link )
                ? ( <p className="text-primary">Enlace: <a target="_blank" href={ link }> {link} </a></p> )
                : (<></>)
                }

                <hr style={{ width:'80%' }}/>
                
                <div className="row">
                    {
                        tecnologias.map( elem => (
                            <div className="col-3">
                                <p className="text-center fs-6 bg-info w-100 fw-bold mx-1 my-1 px-1 py-1" style={{ color: 'white' }} >{ elem }</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    </>
  )
}
