/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Fragment } from "react";
import SimpleModal from './SimpleModal';
import axios from 'axios';
import "./Daftar.css";

export default class Kasir extends React.Component {
  constructor(props) {
    super(props);
      this.handleChangeStuff = this.handleChangeStuff.bind(this);
      this.state = {
        mokas: [],
        produk: {
          produk1: "",
          produk2: "",
        },
        universitas: "",
        nama:"",
        alamat:"",
        hp:"",
    };
  }

  componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:3000/universitas",
			headers: {
				accept: "*/*",
			},
		})
		.then((data) => {
			console.log(data.data);
			this.setState({
				mokas: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}

  handleCalculation = () => {
    const { produk1, produk2 } = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      universitas: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: (value),
        },
      },
      this.handleCalculation
    );
  }

  changeNama = (e) =>{
    this.setState({nama: e.target.value});
  }

  changeAlamat = (e) =>{
    this.setState({alamat: e.target.value});
  }

  changeHp = (e) =>{
    this.setState({hp: e.target.value});
  }

  render() {
    const { mokas, universitas, nama, alamat, hp } = this.state;
    return (
      <div style={{display:"flex"}} className="utama">
        <div className="container">
          <center style={{paddingTop:"70px"}}>
            <h1>Daftarkan Diri Anda !!!</h1>
            <div style={{paddingTop:"30px"}} >
                  <label>Masukkan Nama:</label>
              <div>
                  <input value={nama} onChange={this.changeNama} className="input" placeholder="Nama" size="50"/>
              </div>
                  <label>Masukkan Alamat:</label>
              <div>
                  <input value={alamat} onChange={this.changeAlamat} className="input" placeholder="Alamat" size="50"/>
              </div>
                <label>Masukkan No Hp:</label>
              <div>
                <input value={hp} onChange={this.changeHp} className="input" placeholder="No Hp" size="50" />
              </div>
            </div>
          </center>

          <center>
            <div >
              <div>
                <div className="pilihan">
                  <label >Pilih Universitas :    </label>
                  <select onChange={this.handleChangeStuff} name="produk1" className="select" >
                    <option value="0">Universitas</option>
                    <Fragment>
                      {mokas.map((produk) => {
                        return <option value={produk[1]}>{produk[0]}</option>;
                      })}
                    </Fragment>
                  </select>
                </div>
              </div>
            </div>
            <SimpleModal universitas={universitas} nama={nama} alamat={alamat} hp={hp}  />
          </center>
        </div>

        <div style={{width:"40%", marginTop:"6vh"}}>
          <img
            style={{height:"83vh", width:"80.95vh"}}
            alt="Universitas Diponegoro"
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/04/27/3441062127.jpg"
            />
        </div>
      </div>
    );
  }
}
