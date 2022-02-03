import React, { useEffect, useState } from "react";
import classes from "./IDO.module.scss"
import TestImg from './test_img.svg'
import { IdoBlock } from './components/IdoBlock/IdoBlock'
import Table from "../Table/Table";
import { getUpcomingIdos } from "./API/upcomingIDOs";
import { useNavigate } from "react-router-dom";


const IDO = ({ props }) => {
    const [idos, setIdos] = useState([]);
    const [upcomingIdos, setUpcomingIdos] = useState([]);
    const [endedIdos, setEndedIdos] =useState([]);
    const navigate = useNavigate();
    const [displayIndex, setDisplayIndex] = useState(0);

    useEffect(() => {
        getUpcomingIdos().then((response) => {

            setUpcomingIdos(response.data.upcoming.map( 
                e => {
                    return {
                        id: e.id,
                        token: {
                            name: e.token.name,
                            symbol: e.token.symbol,
                            img: e.logo_url,
                            price: parseFloat(e.token.current_token_price)
                        },
                        saleInfo: {
                            totalRaised: e.target_raised,
                            raised: parseFloat(e.token.total_raise).toFixed(2),
                            partisipants: e.number_of_participants,
                            start_date: new Date(e.timeline.sale_start*1000),
                            token_price: e.current_price,
                            time_until_launch: e.time_until_launch,
                            end_date: e.timeline.sale_ends,
                
                            info: {
                                time_until_launch: null,
                                token_sold: Math.round(parseFloat(e.token.total_tokens_sold)),
                                token_distribution: e.token.token_distribution,
                                sale_progres: e.percent_raised
                            }
                        }
                    }
                }
            ))

            setEndedIdos(response.data.ended.map( 
                e => {
                    return {
                        id: e.id,
                        token: {
                            name: e.token.name,
                            symbol: e.token.symbol,
                            img: e.logo_url,
                            price: parseFloat(e.token.current_token_price)
                        },
                        saleInfo: {
                            totalRaised: e.target_raised,
                            raised: parseFloat(e.token.total_raise).toFixed(2),
                            partisipants: e.number_of_participants,
                            start_date: new Date(e.timeline.sale_start*1000),
                            token_price: e.current_price,
                            time_until_launch: e.time_until_launch,
                            end_date: e.timeline.sale_ends,
                
                            info: {
                                time_until_launch: null,
                                token_sold: Math.round(parseFloat(e.token.total_tokens_sold)),
                                token_distribution: e.token.token_distribution,
                                sale_progres: e.percent_raised
                            }
                        }
                    }
                }
            ));

            setIdos(response.data.upcoming.map( 
                e => {
                    return {
                        id: e.id,
                        token: {
                            name: e.token.name,
                            symbol: e.token.symbol,
                            img: e.logo_url,
                            price: parseFloat(e.token.current_token_price)
                        },
                        saleInfo: {
                            totalRaised: e.target_raised,
                            raised: parseFloat(e.token.total_raise).toFixed(2),
                            partisipants: e.number_of_participants,
                            start_date: new Date(e.timeline.sale_start*1000),
                            token_price: e.current_price,
                            time_until_launch: e.time_until_launch,
                            end_date: e.timeline.sale_ends,
                
                            info: {
                                time_until_launch: null,
                                token_sold: Math.round(parseFloat(e.token.total_tokens_sold)),
                                token_distribution: e.token.token_distribution,
                                sale_progres: e.percent_raised
                            }
                        }
                    }
                }
            ));
        })
    }, []);


    return (<div style={{ marginBottom: "40px" }}>
        <div className={classes.menu}>
            <div
                onClick={() => {setDisplayIndex(0); setIdos([...upcomingIdos])}}
                className={displayIndex === 0? classes.menuElementActive : classes.menuElement}>
                Upcoming IDOs
                <div className={ displayIndex ===0 ? classes.line :classes.clear}></div>
            </div>
            <div
                onClick={() => {setDisplayIndex(1); setIdos([...endedIdos])}}
                className={displayIndex === 1? classes.menuElementActive : classes.menuElement}>
                Completed IDOs
                <div className={ displayIndex ===1 ? classes.line :classes.clear}></div>
            </div>
        </div>


        <div className={classes.idos} >
            {
                idos.map((ido_data, index) => {
                    return <IdoBlock props={ido_data} key={"ido_data" + index}></IdoBlock>
                })
            }
        </div>

    </div>);
}

export default IDO;