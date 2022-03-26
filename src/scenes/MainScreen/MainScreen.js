import {useState} from "react";
import classes from './MainScreen.module.scss'
import InfoBlock from './components/InfoBlock/Info'
import IDO from './components/IDOBlock/IDO'
import { useNavigate } from "react-router-dom";
import BuyPeak from "./components/BuyPeak/BuyPeak";



const MainScreen = () => {
    const [mainText, setMainText] = useState(<>Enter the gateway<br></br> of Blockchain Projects</>);
    const navigate = useNavigate();
    
    return (<div className={classes.MainSCreen}>
        <div className={classes.mainText}>
            {mainText}
        </div>
        <div className={classes.buttons}>
            <div className={classes.infoButton} onClick={() => { navigate('/sales')}}>
                Go to sales
            </div>
            <div className={classes.infoButton} onClick={() => { navigate('/allocation-staking')}}>
                Stake
            </div>
        </div>
        <BuyPeak />
        
        <InfoBlock />
        <IDO />
    </div>);
}

export default MainScreen;