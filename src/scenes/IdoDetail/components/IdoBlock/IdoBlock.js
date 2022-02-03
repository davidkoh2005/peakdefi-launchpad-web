import React from "react";
import classes from "./IdoBlock.module.scss"
function numberWithCommas(x) {
    return x.toString() //.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function timeToDate(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
}

function timeLeft(seconds) {

    let timeString = '';
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    if (d > 0) {
        return d + ' days ' + h + 'hours'
    }
    else if (h > 0) {
        return h + ' hours ' + m + ' minutes';
    }
    else if (m > 0) {
        return m + ":" + s;
    } else {
        return 'Launched';
    }

}

function priceToFormatedPrice(price) {
    return "$"+price
}

export function IdoBlock(props, ido) {

    if(ido===undefined)
        return (<></>)
    
        return (
        <div className={classes.IdoBlock}>
            <div className={classes.tokenBlock}>
                {tokenInfo(props.token)}
                {priceDetail(props.token)}
            </div>

            <div className={classes.saleInfo}>
                <div className={classes.line} ></div>
                {roundDetail(ido.time_left_in_current_round, ido.current_round)}
                {progressBar(props.saleInfo)}
                {launchDetaid(props.saleInfo)}
            </div>

        </div>
    )
}

function tokenInfo(props) {
    return (
        <div className={classes.token}>
            <img alt={props.name} src={props.img} style={{height: '80px'}}/>
            <div className={classes.text}>
                <div className={classes.name}> {props.name} </div>
                <div className={classes.symbol}>{props.symbol}</div>
            </div>
        </div>
    )
}

function priceDetail(props) {
    return (
        <div className={classes.priceDetail}>
            <div className={classes.text}> Price </div>
            <div className={classes.price}> ${props.price} </div>
        </div>
    )
}


function textToShow(text, value) {
    return ( 
        <div className={classes.textToShow}>
            <div className={classes.text}>{text}</div>
            <div className={classes.value}>{ value }</div>
        </div>
     )
}

function progressBar(props) {
    return (
        <div className={classes.progressBar} >
            <div className={classes.backPart} ></div>
            <div style={{width: `${props.info.sale_progres}%`}} className={classes.topPart} ></div>
        </div>
    )
}

function roundDetail(time_left, current_round) {
    

    return (
        <div className={classes.roundDetail}>
            <div className={classes.block}>
                <div className={classes.text}> Round </div>
                <div className={classes.text}> Time Left </div>
            </div>
            <div className={classes.block}>
                <div className={classes.roundInfo}> {current_round} </div>
                <div className={classes.timeInfo}> {timeLeft(time_left)} </div>
            </div>
        </div>
    )
}

function launchDetaid(props) {
    
    
    return (
        <div className={classes.roundDetail}>
            <div className={classes.block}>
                <div className={classes.text}> Token Distribution </div>
                <div className={classes.text}> Total Raised </div>
            </div>
            <div className={classes.block}>
                <div className={classes.roundInfo}> {props.info.token_distribution} </div>
                <div className={classes.roundInfo}> ${props.totalRaised} </div>
            </div>
        </div>
    )
}