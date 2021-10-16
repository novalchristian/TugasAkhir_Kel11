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
          produk1: 0,
          produk2: 0,
        },
        totalTagihan: 0,
        nama:"",
        alamat:"",
        hp:"",
    };
  }

  componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:3000/data",
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
      totalTagihan: total,
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
          [name]: Number(value),
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
    const { mokas, totalTagihan, nama, alamat, hp } = this.state;
    return (
      <div className="container">
        <center>
          <div style={{paddingTop:"70px"}} >
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
          <div style={{ height: "75%" }}>
            <div>
              <div className="pilihan">
                <label >Pilih Mobil :    </label>
                <select onChange={this.handleChangeStuff} name="produk1" className="select" >
                  <option value="0">Universitas</option>
                  <Fragment>
                    {mokas.map((produk) => {
                      return <option value={produk.nama}>{produk.nama}</option>;
                    })}
                  </Fragment>
                </select>
              </div>
            </div>
          </div>
          <SimpleModal total={totalTagihan} nama={nama} alamat={alamat} hp={hp}  />
        </center>
      </div>
    );
  }
}
