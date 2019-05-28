import React from 'react';
import {Link} from 'react-router-dom';

const Result = (props) => {
    const results = props.results;
    //return `fdsffsd ${results}`;
    return (
        <div className="row">
            {
            results.map( (items) => {
                
                const name = items['profile']['first_name'] + ' ' + items['profile']['last_name']
                return(                                                
                    <div className="col-lg-6" key={items['uid']}>
                        <div className="single-travel media pb-70">
                            <img className="img-fluid d-flex  mr-3" src={items['profile']['image_url']} alt={name} />                            
                            <div className="media-body align-self-center">
                                <h4 className="mt-0">
                                    <span style={{fontWeight: "bold"}}>                                        
                                        <Link to={{
                                         pathname: `/Detail/${items['uid']}`,
                                         state: {docID: items['uid']}
                                        }}>{name}</Link>
                                    </span>
                                </h4>
                                <p><span style={{fontWeight: "bold"}}>Specialist:</span> {items['specialties'][0]? items['specialties'][0]['uid']: ''}</p>
                                <p><span style={{fontWeight: "bold"}}>Department:</span> {items['specialties'][0]? items['specialties'][0]['name']: ''}</p>
                                <p><span style={{fontWeight: "bold"}}>Info:</span> {items['specialties'][0]? items['specialties'][0]['description']: ''}</p>
                                
                                 <button type="button" className="btn btn-sm btn-default">
                                     <Link to={{
                                         pathname: `/Detail/${items['uid']}`,
                                         state: {docID: items['uid']}
                                        }}>
                                    Profile >>
                                    </Link>
                                </button>                       
                            </div>
                        </div>																				
                    </div>
                                          
                )
            })}
        </div>  
    )
}

export default Result