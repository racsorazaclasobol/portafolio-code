import { habilidadesTecnicas, habilidadesBlandas } from '../data'
import DescHabilidad from './DescHabilidad';

const Habilidades = () => {

    
    return (
        <>
            <div className="card-body">
                <h2>Habilidades</h2>
                <hr />

                <h5 className='font-weight-bold'>
                    Habilidades Técnicas
                </h5>
                <br />

                {
                    habilidadesTecnicas.map( (elem, indice) => (
                        <DescHabilidad key={ indice } habilidad={ elem } />
                    ) )
                }

                <hr style={{ width:'70%' }} />

                <h5 className='font-weight-bold'>
                    Habilidades Blandas
                </h5>
                <br />
                {
                    habilidadesBlandas.map( (elem, indice) => (
                        <DescHabilidad key={ indice } habilidad={ elem } />
                    ) )
                }
            </div>
        </>
    )
}

export default Habilidades;