import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2D559A;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store_name: 'متجر جنان',
      products: [
        {
          "sub_category": "تزيين مخبوزات",
          "brand": "بيتي كروكر",
          "last_scan_time": "2020-06-29",
          "image": "/files/16000437906_result.jpg",
          "name": "خليط كيك بيتي كروكر اصفر 500 جرام",
          "type": "خليط كيك",
          "main_category": "مستلزمات الطبخ",
          "barcode": "016000437906",
          "price": 11.500000
        },
        {
          "sub_category": "حليب طويل الأجل",
          "brand": "نادك",
          "last_scan_time": "2020-07-10",
          "image": "/pics/fa21d2709c65b430fba743622d93517f91e9514f-00.jpg",
          "name": "حليب طويل الاجل نادك قليل الدسم 200 مل",
          "type": "حليب طويل الاجل",
          "main_category": "الحليب والأجبان",
          "barcode": "6281057011001",
          "price": 1.250000
        },
        {
          "sub_category": "عصائر",
          "brand": "سيزر",
          "last_scan_time": "2020-07-10",
          "image": "/pics/1798969b9d80bf1fad350a8eebaae7aaa65616b4-00.jpg",
          "name": "نكتار سيزر مانجو 250 مل",
          "type": "نكتار",
          "main_category": "المشروبات والتسالي",
          "barcode": "6281060043617",
          "price": 3.300000
        },
        {
          "sub_category": "العناية بالشعر",
          "brand": "غارنييه",
          "last_scan_time": "2020-06-29",
          "image": "/pics/bc8fe5b6f0a18717ab256809050ba35ba5dcdf66-00.jpg",
          "name": "صبغة شعر غارنييه اشقر غامق 6 110 مل",
          "type": "صبغة شعر",
          "main_category": "العناية الشخصية",
          "barcode": "3061375781076",
          "price": 15.333333
        },
        {
          "sub_category": "عصائر",
          "brand": "كي دي دي",
          "last_scan_time": "2020-07-13",
          "image": "/pics/dd52f30b04970744103b02ec340286879c193ebd-00.jpg",
          "name": "عصير كي دي دي اناناس 1 لتر",
          "type": "عصير ",
          "main_category": "المشروبات والتسالي",
          "barcode": "6271002203117",
          "price": 8.000000
        },
        {
          "sub_category": "شاي وأعشاب",
          "brand": "احمد",
          "last_scan_time": "2020-06-29",
          "image": "/pics/c8ba13f3c0e5c87f513881d3591e70d6c6ee4c03-00.jpg",
          "name": "شاي احمد انجليزي 100 حبة",
          "type": "شاي",
          "main_category": "المشروبات والتسالي",
          "barcode": "054881017817",
          "price": 17.000000
        },
        {
          "sub_category": "علك و حلوى",
          "brand": "بورقات",
          "last_scan_time": "2020-06-29",
          "image": "/pics/25c18f4c8490393bcd359406124689a34a6a79a3-00.jpg",
          "name": "حلاوة بورقات غائر حلقات 175 جرام",
          "type": "حلاوة",
          "main_category": "المشروبات والتسالي",
          "barcode": "6281100301905",
          "price": 8.761905
        },
        {
          "sub_category": "المعكرونة والشعيرية",
          "brand": "قودي",
          "last_scan_time": "2020-07-10",
          "image": "/pics/3885b25acfc0d2c77ba481da860ba1cefe20ea17-00.jpg",
          "name": "مكرونة قودي من سميد القمح 500 جرام",
          "type": "مكرونة ",
          "main_category": "مستلزمات الطبخ",
          "barcode": "6281014400190",
          "price": 4.500000
        },
        {
          "sub_category": "وجبات مجمدة",
          "brand": "هوت اند كرسبي",
          "last_scan_time": "2020-07-10",
          "image": "/pics/34b3c225a6d56e11b7287cc3d3ef38648cc27a9b-00.jpg",
          "name": "بطاطس مقلية هوت اند كرسبي كريس كات 2500 جرام",
          "type": "بطاطس مقلية ",
          "main_category": "المجمدات",
          "barcode": "8711571072458",
          "price": 29.571429
        },
        {
          "sub_category": "معطرات الجو",
          "brand": "ايرويك",
          "last_scan_time": "2020-06-29",
          "image": "/pics/545b7d698601dfb6c5c377de585c49da654af0ff-00.jpg",
          "name": "فريشماتيك ايرويك ورود منتصف الليل 250 مل مع 35% خصم",
          "type": "فريشماتيك",
          "main_category": "مستلزمات المنزل",
          "barcode": "6295120034637",
          "price": 49.285714
        },
        {
          "sub_category": "عناية الأسنان",
          "brand": "أورال بي",
          "last_scan_time": "2020-06-29",
          "image": "/pics/c892bc36319afd8d399708ae1a61f02fe8233e82-00.jpg",
          "name": "معجون اسنان أورال بي برو إكسبرت تبييض بالنعناع 75 مل",
          "type": "معجون اسنان",
          "main_category": "العناية الشخصية",
          "barcode": "4084500190818",
          "price": 18.000000
        },
        {
          "sub_category": "العناية بالوجه",
          "brand": "يوكو",
          "last_scan_time": "2020-06-29",
          "image": "/files/8853976004877.jpg",
          "name": "واقي شمس يوكو بعامل حماية 30 جرام",
          "type": "واقي من الشمس",
          "main_category": "العناية الشخصية",
          "barcode": "8853976004877",
          "price": 20.000000
        },
        {
          "sub_category": "العناية بالشعر",
          "brand": "برت بلاس",
          "last_scan_time": "2020-06-29",
          "image": "/pics/df851b95c6600839eedc1ef11a0a20ebeee8fbe5-00.jpg",
          "name": "شامبو برت بلاس لتقوية الشعر 400 مل",
          "type": "شامبو",
          "main_category": "العناية الشخصية",
          "barcode": "6281031260128",
          "price": 13.000000
        },
        {
          "sub_category": "قهوة",
          "brand": "كيف الشيوخ",
          "last_scan_time": "2020-07-10",
          "image": "/pics/e05ab61fabe3aaaeba0411abb1fe08472cefe1b8-00.jpg",
          "name": "قهوة عربية كيف الشيوخ 500 جرام",
          "type": "قهوة عربية",
          "main_category": "المشروبات والتسالي",
          "barcode": "6287010010029",
          "price": 24.095238
        },
        {
          "sub_category": "صلصات وخل",
          "brand": "بوك",
          "last_scan_time": "2020-07-13",
          "image": "/pics/f326f32e494087bd61ecea8cff9aee1989528c48-00.jpg",
          "name": "صلصة بوك البشاميل خفيفة مع الجبنة 500 مل",
          "type": "صلصة",
          "main_category": "مستلزمات الطبخ",
          "barcode": "5711953078460",
          "price": 17.500000
        },
        {
          "sub_category": "خضار",
          "brand": "فرشلي",
          "last_scan_time": "2020-07-10",
          "image": "/pics/d8950c611a40a5862052af854b317efa3ea5b8f5-00.jpg",
          "name": "ذرة فرشلي صغار 425 جرام",
          "type": "ذرة معلبة",
          "main_category": "الإفطار والمعلبات",
          "barcode": "6281063632023",
          "price": 6.500000
        },
        {
          "sub_category": "العناية بالشعر",
          "brand": "بانتين",
          "last_scan_time": "2020-06-29",
          "image": "/pics/cbe339a5d290063b3a34ac91cb79471ae8ebcb21-00.jpg",
          "name": "شامبو بانتين تموجات متناسقة 200 مل",
          "type": "شامبو",
          "main_category": "العناية الشخصية",
          "barcode": "5410076881956",
          "price": 10.000000
        },
        {
          "sub_category": "الزيوت والسمن",
          "brand": "بيوتي",
          "last_scan_time": null,
          "image": "/pics/8d93ee79b0c0e0253587e5ca4ca9fa286a771424-00.jpg",
          "name": "زيت زيتون بيوتي مزيج زيت مكرر وزيت بكر ممتاز 300 مل",
          "type": "زيت زيتون",
          "main_category": "مستلزمات الطبخ",
          "barcode": "5285004915573",
          "price": 9.500000
        },
        {
          "sub_category": "الصابون والعناية بالجسم",
          "brand": "لايف بوي",
          "last_scan_time": null,
          "image": "/pics/50b0eb04de8593e53fecbec8e63b3363108db9e3-00.jpg",
          "name": "صابون سائل لليدين لايف بوي للحماية من الجراثيم 750 مل",
          "type": "صابون سائل لليدين",
          "main_category": "العناية الشخصية",
          "barcode": "6281006550766",
          "price": 40.000000
        },
        {
          "sub_category": "غذاء الطفل",
          "brand": "سيريلاك",
          "last_scan_time": "2020-06-29",
          "image": "/pics/a547fe89fb36698a587ad7ac3a3280fea5a40515-10.jpg",
          "name": "طعام اطفال سيريلاك قمح وفواكه من 6 اشهر 400 جرام",
          "type": "طعام أطفال",
          "main_category": "احتياجات الأطفال",
          "barcode": "7613034981745",
          "price": 26.285714
        },
        {
          "sub_category": "الصابون والعناية بالجسم",
          "brand": "ديتول",
          "last_scan_time": "2020-06-29",
          "image": "/files/6001106112127r.jpg",
          "name": "صابون ديتول كوول 120 جرام",
          "type": "صابون",
          "main_category": "العناية الشخصية",
          "barcode": "6001106112127",
          "price": 3.500000
        },
        {
          "sub_category": "عسل ومربى",
          "brand": "البريزال",
          "last_scan_time": null,
          "image": "/pics/5e60f2c9e591dbc8774be94061f06beda46fe0f0-00.jpg",
          "name": "عسل البريزال الغابة السوداء 500 جرام",
          "type": "عسل",
          "main_category": "الإفطار والمعلبات",
          "barcode": "8413812071526",
          "price": 38.250000
        }
      ],
      products_count:0,
      loading:true
    };
  }
  goToCards(path) {
    this.props.history.push({
      pathname:'/cards',
      state:{
        products:this.state.products
      }
    });
  }

  calculateCount = async (products) => {
    let count = await this.state.products.length
    await this.setState({
      products_count:count,
      loading:false
    })
  }
  componentDidMount() {
    //TODO: call api found_in_products_not_in_sotre_products where reviewed = false
    // make cron job in backend to send the cards link to pos-seller (Main Contact Mobile) with seller-hash
    // params seller-hash, store_id(readable-id) --> check if the seller has this store ==> return store-hash
    this.calculateCount(this.state.products)
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
            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%',marginBottom: 10}}>
              <h3 style={{textAlign: 'right'}}>{this.state.store_name}</h3>
              <h3 style={{textAlign: 'right'}}>اسم المتجر</h3>
            </div>

            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',width: '90%',marginBottom: 20}}>
              <h3 style={{textAlign: 'right'}}>{this.state.products_count}</h3>
              <h3 style={{textAlign: 'right'}}>عدد المنتجات</h3>
            </div>

            <div style={{display: 'flex',alignItems: 'center',width: '90%',marginTop: 20,justifyContent: 'center'}}>
              <Button variant="contained" color="primary" onClick={() => this.goToCards('/cards')} style={{height: 50,padding: 0,width: '100%',fontWeight: 'bold',fontSize: 15}}>ابدأ تصفح المنتجات</Button>
            </div>
          </React.Fragment>
        }

      </div>
    );
  }

}

export default withRouter(Home);
