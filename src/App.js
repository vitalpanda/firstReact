import React from 'react';
import Body from './component/Body';

const API_KEY = '9e5403e96d81f76af5b0202716529bcd';
class App extends React.Component{

    state = {
      result : [],
      error: 'not',
      isSubmit: 'not',
      location: 'not'
    }
    
  
  formSubmit = async (e) => {    
    e.preventDefault();
    this.setState({isSubmit: 'yes', result: []});
    const sName = e.target.elements.doc.value;
    const pName = e.target.elements.place.value;
    
    const gApi = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${pName}&key=`
    );
    const gApi_data = await gApi.json();
    //console.log(gApi_data);
    if(gApi_data['status'] === 'OK'){
      const location = gApi_data['results'][0]['formatted_address'];
      const latlong = gApi_data['results'][0]['geometry']['location']['lat'] + ',' + gApi_data['results'][0]['geometry']['location']['lng'];
      console.log(latlong);
      const api_call = await fetch(
        `https://api.betterdoctor.com/2016-03-01/doctors?query=${sName}&location=${latlong},100&user_location=&skip=0&limit=30&user_key=${API_KEY}`
      );
      const data = await api_call.json();
      if(!data['meta']['error']){     
        const gotResult = data['data'];
        if(gotResult.length < 1){
          this.setState({error: 'yes', isSubmit: 'not', location});
        }else{
          this.setState({
            error: 'not',
            isSubmit: 'not',
            result: gotResult,
            location
          });
        }
      }else{
        this.setState({error: 'yes', isSubmit: 'not', location});
      }
    }else{
      this.setState({error: 'yes', isSubmit: 'not', location: 'not'});
    }
    
  }
  componentDidMount(){
    const getDocArr = localStorage.getItem("docArr");
    const location = localStorage.getItem("location");
    if(getDocArr !== null){
      const DocAr = JSON.parse(getDocArr);
      this.setState({ result: DocAr });
      this.setState({ location });
    }
  }
  
  componentDidUpdate(){
    const docArrnew = JSON.stringify(this.state.result);
    localStorage.setItem("docArr", docArrnew);
    localStorage.setItem("location", this.state.location);
  }
  

  render(){
    return (
      <div className="App">
          
        <Body formSubmit={this.formSubmit} result={this.state.result} error={this.state.error} isSubmit={this.state.isSubmit} location={this.state.location} />
        
      </div>
    );
  }
}

export default App;
