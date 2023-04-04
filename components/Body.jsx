import { experiencias } from '../data/experiencias';
import { DescExperiencias } from './DescExperiencias';
import Estudios from './Estudios';
import Habilidades from './Habilidades';

const Body = () => {


    return (
        <>
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light" style={{ height:'100%' }}>
                        {/* <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab"> Habilidades</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabIndex="-1"> Estudios </a>
                            </li>
                        </ul> */}

                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade active show" id="home" role="tabpanel">
                                <Habilidades />
                                <Estudios />
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h2>Experiencia</h2>
                            <hr />
                                {
                                    experiencias.map( (elem, index) => (
                                        <DescExperiencias key={ index } experiencia={ elem } />
                                    ) )
                                }
                        </div>
                    </div>
                </div>
            </div>   

        </>
    )
}

export default Body;
