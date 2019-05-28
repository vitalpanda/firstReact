import React from 'react';

import '../css/bootstrap.css';
import '../css/main.css';
import '../css/fa.css';
import Result from './Result';


class Body extends React.Component{    
    render(){
        const result = this.props.result;
        return(
            <section className="travel-area section-gap" id="travel">
                <div className="container">
                
                <div className="container">
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-8">
                            <form  onSubmit={this.props.formSubmit}>
                            <div id="imaginary_container"> 
                                <div className="input-group stylish-input-group">
                                    
                                    <input 
                                        type="text" 
                                        name="doc"
                                        className="form-control"  
                                        placeholder="type category (ex: orthopedic, vision) " 
                                        required="" />
                                        <input 
                                        type="text" 
                                        name="place"
                                        className="form-control"  
                                        placeholder="Location" 
                                        required />
                                        <span className="btn btn-sm btn-info">
                                            <button type="submit" className="btn btn-sm btn-info">
                                                search
                                            </button>  
                                        </span>
                                    
                                </div>
                            </div>
                            </form> 
                            <p className="mt-20 text-center text-white">result</p>
                        </div>
                    </div>
                </div>  
            
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                            <h1 className="mb-10">Search nearest doctor</h1>
                            <p>Type category and place in search box, result will be shown below</p>
                            {result.length < 1 ? '' : <p> Total {result.length} doctors found {this.props.location === 'not' ? '' : ' in ' + this.props.location }!</p> }
                        </div>
                    </div>
                </div>						
                
                    {this.props.error === 'not'? '' : <p className="text-center text-warning">No doctor found in {this.props.location} with your search. Try again!</p>   }
                    {result.length < 1 ? 
                        this.props.isSubmit === "not"? <p className="text-center">Type something and press search button to get result</p>
                        :
                        <p className="text-center lead">Loading.......</p>      																				                
                    :
                    <Result results={result} />                                                         
                    }
            </div>					
        </section>
        )
    }
    
}

export default Body;