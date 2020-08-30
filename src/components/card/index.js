import React,{useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import {withRouter} from 'react-router-dom';

import { useHistory } from "react-router";

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


// import { Button } from 'react-bootstrap';
var Barcode = require('react-barcode');

let correct_prices = []
let wrong_prices = []
let ignore_prices =[]


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    width:'100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:5,
    paddingRight:10,
    paddingLeft:10,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  header2: {
    marginBottom:5,
    paddingRight:10,
    paddingLeft:10,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: '100%',
    maxWidth: 400,
    overflow: 'hidden',
    // display: 'block',
    // width: '100%',
  },
}));

export default function Card(props) {

  const history = useHistory();
  const data_to_arrange = props.history.location.state.products
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cardsData, setCardsData] = React.useState(data_to_arrange);
  // setCardsData(() => data_to_arrange)
  const maxSteps = cardsData.length;

  const changeItemPrice = (id, newPrice) =>{
    console.log(id,newPrice);
    let newArray = [...cardsData];
    newArray[id].price = newPrice
    setCardsData(newArray)
  }

  const handleNext = () => {
    if (cardsData.length > (activeStep + 1)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else {
      setActiveStep((prevActiveStep) => prevActiveStep + 0);
      console.log('You have reached the maximum');
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addToCorrectPrices = (item) =>{
    let check = 0
    for (var i = 0; i < correct_prices.length; i++) {
      if (correct_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      correct_prices.push(item)
      if ((correct_prices.length + wrong_prices.length + ignore_prices.length) == cardsData.length ) {
        console.log('Done');
        goToFinalStep()
      }
    }
    console.log('correct prices are: ',correct_prices);
    handleNext()
  }

  const addToWrongPrices = (item) =>{
    let check = 0
    for (var i = 0; i < wrong_prices.length; i++) {
      if (wrong_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      wrong_prices.push(item)
      if ((correct_prices.length + wrong_prices.length + ignore_prices.length) == cardsData.length ) {
        console.log('Done');
        goToFinalStep()
      }
    }
    console.log('wrong prices are: ',wrong_prices);
    handleNext()
  }

  const addToIgnoreNowPrices = (item) =>{
    let check = 0
    for (var i = 0; i < ignore_prices.length; i++) {
      if (ignore_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      ignore_prices.push(item)
      if ((correct_prices.length + wrong_prices.length + ignore_prices.length) == cardsData.length ) {
        console.log('Done');
        goToFinalStep()
      }
    }
    console.log('Ignore prices are: ',ignore_prices);
    handleNext()
  }

  const goToFinalStep = () =>{
    history.push({
    pathname:  "/finalstep",
    state: {
      correct_prices: correct_prices,
      wrong_prices:wrong_prices,
      ignore_prices:ignore_prices
    }
    })
  }

  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>

      <div className={classes.root} style={{height: window.innerHeight,display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>

        <Paper square elevation={2} className={classes.header} style={{height: '10%',maxHeight: '10%'}}>
          <h5 style={{textAlign:'center'}}>{cardsData[activeStep].name}</h5>
        </Paper>

        <div style={{display: 'flex',width: '100%',justifyContent: 'center',alignItems: 'center',height: '30%',maxHeight: '30%'}}>
          <img
            className={classes.img}
            src={'https://nana.sa/'+cardsData[activeStep].image}
            alt={cardsData[activeStep].label}
          />
        </div>

        <Paper square elevation={0} className={classes.header} style={{height: '10%',maxHeight: '10%'}}>
          <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',paddingBottom: 0,marginBottom: 0}}>
            <h2 style={{color: 'red'}}>{parseFloat(cardsData[activeStep].price).toFixed(2)} </h2>
            <h5 style={{color: 'red',marginLeft: 5}}> SAR </h5>
          </div>
        </Paper>


        <Paper square elevation={0} className={classes.header2} style={{height: '30%',maxHeight: '30%',paddingTop: 10,paddingBottom: 10}}>
          <Button variant="contained" color="primary" onClick={() => addToCorrectPrices(cardsData[activeStep])} style={{width: '100%',height: 40,padding: 0,marginBottom: 10,fontWeight: 'bold',fontSize: 18}}>اعتماد</Button>
          <div style={{display: 'flex',flexDirection: 'row',width: '100%',justifyContent: 'space-between',alignItems: 'center',height: 40,marginBottom: 10}}>
            <Button variant="contained" color="default" onClick={() => addToIgnoreNowPrices(cardsData[activeStep])} style={{width: '49%',height: 40,padding: 0,fontWeight: 'bold',fontSize: 18}}>لاحقاً</Button>
          <PopupState variant="popover" popupId="demo-popup-popover" style={{width: '49%'}}>
              {(popupState) => (
                <div style={{width: '49%'}}>
                  <Button {...bindTrigger(popupState)} variant="contained" color="secondary"  style={{width: '100%',height: 40,padding: 0,fontWeight: 'bold',fontSize: 18}}>
                    تغيير السعر
                  </Button>
                  {/* onClick={() => addToWrongPrices(data_to_arrange[activeStep])} */}
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Box p={3}>
                      <Typography style={{textAlign: 'center',fontSize: 25}}>السعر الجديد</Typography>
                      <form>
                        <input style={{textAlign: 'right',height: 30,paddingRight: 5,paddingLeft: 5,fontSize: 16}} type="number" className="form-control" onChange={e => {
                            changeItemPrice(activeStep,e.target.value)
                        }}/>
                      </form>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          {/* <Button variant="contained" color="secondary" onClick={() => addToWrongPrices(data_to_arrange[activeStep])} style={{width: '49%',height: 40,padding: 0,fontWeight: 'bold',fontSize: 18}}>تغيير السعر</Button> */}
          </div>
          <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%'}}>
            <Barcode style={{marginTop: 5,maxWidth:'100%'}}value={cardsData[activeStep].barcode} format={cardsData[activeStep].barcode.length===13 ? "EAN13" : cardsData[activeStep].barcode.length===8 ? "EAN8" : "UPC"} width={1.5}  height={60}/>
          </div>
        </Paper>

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
               {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    </div>

  );
}
