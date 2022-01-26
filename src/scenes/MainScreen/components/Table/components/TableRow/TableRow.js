import React from "react"
import { useDispatch } from "react-redux";
import { setSelectedIDO } from "../../../../../../features/adminPageSlice";
import classes from "./TableRow.module.scss"

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function TableRow(props) {
    const endAt = new Date(props.endAt*1000);

    const dispatch = useDispatch();
    return (
        <div className={classes.TableRow} style={{maxWidth: '100%', minWidth: "1000px", background:props.color}} onClick={()=>dispatch(setSelectedIDO({...props}))}>
            <div className={classes.infoBlock} style={{ width: '14%'}} >
                <img alt={props.name} src={props.img} />
                <div className={classes.info}>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.symbol}>
                        {props.symbol}
                    </div>
                </div>
            </div>
            <div className={classes.divUpdate} style={{width: '10%'}}> {'$'+props.idoPrice} </div>
            <div className={classes.divUpdate} style={{width: '9%'}}> {'$' + props.currentPrice} </div>
            <div className={classes.divUpdate} style={{width: '9%'}}>{'$' + props.ath }</div>
            <div className={classes.divUpdate} style={{width: '9%'}}>{ props.roi.toFixed(3) + 'x' }</div>
            <div className={classes.divUpdate} style={{width: '12%'}}>{ props.partisipants }</div>
            <div className={classes.divUpdate} style={{width: '12%'}}>{ '$' + numberWithCommas(props.totalRaised)} </div>
            <div className={classes.divUpdate} style={{width: '12%'}}> {props.totalTokenSold} </div>
            <div className={classes.divUpdate} style={{width: '13%'}}> {endAt.toLocaleString('en-US', {dateStyle: 'long'})} </div>
        </div>
    )
}