import React from 'react'
import classes from './productdetails.module.css'


const productdesc = (props) => {
  const coloroptions = props.data.colorOptions.map((item, pos) => {
    const classarr = [classes.imagetype];
    if (pos === props.productpreviewimagepos){
      classarr.push(classes.selectedimagetype);
    }
    return (
      <img key={pos} className={classarr.join(' ')} onClick = {() => props.oncoloroptionclick(pos)} src={item.imageUrl}/>
    )
  })
  const featureList = props.data.featureList.map((item,pos) => {
    const classArr = [classes.feature]
    if(pos === props.featurepos){
      classArr.push(classes.featureselected);
    }
    return (
      <button key={pos} className={classArr.join(' ')} onClick= {() => props.onfeatureclick(pos)}> {item} </button>
    )
  })
    return (
        <div className={classes.productdata}>
            <h1>{props.data.title}</h1>
            <p>
              {props.data.description}
            </p>
            <h3>Select Color</h3>
            {coloroptions}

            <h3>Features</h3>
          <div>
            {featureList}
          </div>

          <button className={classes.last}>BUY NOW</button>
        </div>
    )
}

export default productdesc;