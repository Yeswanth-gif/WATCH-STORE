import React from 'react'
import classes from './productpreview.module.css'

const Productpreview = (props) => {
    let hrs = (new Date().getHours() > '9') ?(new Date().getHours()): '0' + (new Date().getHours())
    let mins = (new Date().getMinutes() > '9') ?(new Date().getMinutes()): '0' + (new Date().getMinutes())
    return (
        <div className={classes.Product}>

            <img src= {props.productdata.colorOptions[props.productpreviewimagepos].imageUrl} alt = 'watch'/>

            {props.showheartbeat ?

                <div className={classes.Heartbeat}>
                <img src='https://pngimg.com/uploads/heart/heart_PNG51352.png'/>
                <p>78</p>
                </div>
                :
                <div className={classes.Timedata}>
                    <p>{`${hrs}:${mins}`}</p>
                </div>
            } 
        </div>
    );
}

export default Productpreview;