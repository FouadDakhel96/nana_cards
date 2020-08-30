import React, { Component } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Button from '@material-ui/core/Button';
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2D559A;
`;

class Finalstep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct_prices: this.props.history.location.state.correct_prices,
      wrong_prices: this.props.history.location.state.wrong_prices,
      ignore_prices: this.props.history.location.state.ignore_prices,
      loading:false
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between'}}>

        <div style={{display: 'flex',alignItems: 'flex-start',width: '90%',marginBottom: 30,marginTop: 10}}>
          <img
            src={'/nanaLogo.png'}
            style={{maxWidth: 50,maxHeight: 75}}
            alt={'NANA LOGO'}
          />
        </div>

        {
          this.state.loading
          ?
            <div className="sweet-loading" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%',height: '100%',marginTop: 80}}>
              <RingLoader
                css={override}
                size={60}
                color={"#9BD428"}
                loading={this.state.loading}
              />
            </div>
          :
          <React.Fragment>
            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%'}}>
              <h3 style={{textAlign: 'right'}}>{this.state.correct_prices.length + this.state.wrong_prices.length + this.state.ignore_prices.length}</h3>
              <h3 style={{textAlign: 'right'}}>عدد المنتجات كاملة</h3>
            </div>

            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%'}}>
              <h3 style={{textAlign: 'right'}}>{this.state.correct_prices.length}</h3>
              <h3 style={{textAlign: 'right'}}>عدد المنتجات المتطابقة</h3>
            </div>

            {/* <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%'}}>
              <h3 style={{textAlign: 'right'}}>{this.state.wrong_prices.length}</h3>
              <h3 style={{textAlign: 'right'}}>عدد المنتجات المختلفة أسعارها</h3>
            </div> */}

            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%'}}>
              <h3 style={{textAlign: 'right'}}>{this.state.ignore_prices.length}</h3>
            <h3 style={{textAlign: 'right'}}>عدد المنتجات بدون قرار</h3>
            </div>

            <div style={{display: 'flex',alignItems: 'center',width: '90%',marginTop: 40,justifyContent: 'center'}}>
              <Button variant="contained" color="primary"
                // onClick={() => this.goToCards('/cards')}
                 style={{height: 50,padding: 0,width: '100%',fontWeight: 'bold',fontSize: 15}}>اعتماد الاختيارات</Button>
            </div>
          </React.Fragment>
        }

      </div>
    );
  }

}

export default Finalstep;
