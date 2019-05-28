import React from 'react';
import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/main.css';
import '../css/fa.css';
import '../fonts/fontawesome-webfont.eot';

const Detail = (props) => {
    
        var countArr = 0;
        var docDt = [];
        var docArr = JSON.parse(localStorage.getItem("docArr"));
        var docID = props.location.state.docID;
        var name;
        if(docID !== undefined && docArr.length > 0){
            countArr = docArr.length;
            for(var i=0; i < countArr + 1; i++){
                if(docArr[i]['uid'] === docID){
                    docDt = docArr[i];
                    name = docDt['profile']['first_name'] + ' ' + docDt['profile']['last_name']
                    break;
                }else{
                    docDt = []
                }
            }            
        }
        
        return(
            <div className="post-wrapper pt-100" style={{paddingTop: '20px'}}>
                <section className="post-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 offset-lg-6">
                            
                            <br />
                            <br />
                                {countArr < 1 ? 
                                <h4 className="text-center"><span style={{fontWeight: "bold"}}>Sorry!</span> No doctor found!</h4>
                                :
                                <div className="single-page-post">
                                    <img className="img-fluid text-center" src={docDt['profile']['image_url']} alt={name} />
                                    <div className="top-wrapper ">
                                        <div className="row d-flex justify-content-between">
                                            <h2 className="col-lg-8 col-md-12 text-uppercase">
                                                {name}
                                            </h2>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="single-post-content">
                                        <p><span style={{fontWeight: "bold"}}>Specialist:</span> {docDt['specialties'][0]? docDt['specialties'][0]['uid']: ''}</p>
                                        <p><span style={{fontWeight: "bold"}}>Department:</span> {docDt['specialties'][0]? docDt['specialties'][0]['name']: ''}</p>
                                        <p><span style={{fontWeight: "bold"}}>Info:</span> {docDt['specialties'][0]? docDt['specialties'][0]['description']: ''}</p>                                      
                                        <p><span style={{fontWeight: "bold"}}>Bio:</span> {docDt['profile']['bio']? docDt['profile']['bio']: ''}</p>

                                        <div className="bottom-wrapper"></div> 

                                        <h4 className="text-uppercase">
                                           Practices:
                                        </h4>
                                        <br />
                                        {
                                         docDt['practices'].map( (practice) => {
                                             var address = practice['visit_address']['street'] + ', ' + practice['visit_address']['city'] + ', '+ practice['visit_address']['state_long'] +', ' + practice['visit_address']['zip'];
                                            return(
                                                <div key={practice['name']}>
                                                    <h5>{practice['name']}</h5>
                                                    <p>
                                                    <span style={{fontWeight: "bold"}}><i className="fa fa-home"></i>:</span> {address}<br />
                                                    <span style={{fontWeight: "bold"}}><i className="fa fa-phone"></i>:</span> {practice['phones'][0]['number']}</p>
                                                </div>
                                            )
                                         } )   
                                        }
                                    
                                    </div>
                                    <div className="bottom-wrapper">
                                        <div className="row">
                                            <div className="col-lg-4 single-b-wrap col-md-12">
                                                
                                            </div>
                                            
                                            
                                        </div>
                                    </div> 
                                </div>
                                }                                    
                                 <button style={{color: '#fff'}} type="submit" className="btn btn-default">
                                    <Link to="/">{'<<< Back to homepage'}</Link>
                                </button>  
                                <br />
                                <br />
                                <br />
                            </div>                    
                        </div>
                    </div>    
                </section>
            </div>
        )
    
}

export default Detail;