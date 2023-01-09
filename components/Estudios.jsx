import { estudios } from "../data";

const Estudios = () => {
    return (
        <>
            <div className="card-body">
                <h2>Estudios</h2>
                <hr />
                
                <div className="card border-light">

                    {
                        estudios.map( (elem, index) => (
                            <div className="card-header mb-4" key={index}>
                                <p className="text-primary"> 
                                    { elem.carrera }
                                </p>
                                <p className="text-danger" style={{ marginTop:'-15px' }}>
                                    { elem.institucion }
                                </p>
                                <p className="text-muted" style={{ marginTop:'-15px' }}>
                                    { elem.duracion }
                                </p>
                                <p style={{ marginTop:'-5px', marginBottom:'-5px' }}>
                                    
                                    {
                                        ( elem.certificado !== '' )
                                        ? ( <a href={ elem.certificado } target="_blank" className="text-muted" style={{ textDecoration:'none' }}> { elem.estado } </a> )
                                        : ( <p className="text-muted"> { elem.estado } </p> ) 
                                    }
                                    
                                </p>
                            </div>
                        ) )
                    }

                    
                </div>

            </div>
        </>
    )
}

export default Estudios;