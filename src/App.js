import React, {Component} from 'react';
import classes from './App.module.css'
import Productpreview from './productpreview/Productpreview';
import Productdesc from './productdesc/productdetails';
import Topbar from './Topbardetails/Topbar';
import ProductData from './productdata';


class App extends Component {
  state = {
    productdata : ProductData,
    productpreviewimagepos : 0,
    showheartbeat : false,
    featurepos : 0,
  }

  onimagecolorclick = (pos) => {
    this.setState({productpreviewimagepos : pos})
  }

  onfeatureclick = (pos) => {
    this.setState({showheartbeat : false})
    if(pos === 1){
      this.setState({showheartbeat : true});
    }
    this.setState({featurepos : pos})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar/>
        </header>
  
        <div className={classes.Maincontainer}>
          <div className={classes.Product}>
            <Productpreview productdata = {this.state.productdata} productpreviewimagepos = {this.state.productpreviewimagepos} showheartbeat = {this.state.showheartbeat} />
          </div>
          <div className={classes.productdata}>
              <Productdesc data = {this.state.productdata} oncoloroptionclick = {this.onimagecolorclick} onfeatureclick = {this.onfeatureclick} productpreviewimagepos = {this.state.productpreviewimagepos} featurepos = {this.state.featurepos}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
