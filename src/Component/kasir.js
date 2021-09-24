import React, { Fragment } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      mokas: [
        ["Honda Win", 8000000],
        ["Supermoto CRF", 20000000],
        ["Supra 125 Modif Touring", 10000000],
        ["CB Ganteng", 18000000],
        ["Scoopy 2021", 19000000],
        ["Scoopy 2019", 17500000],
        ["Beat 2021", 16000000],
        ["Beat 2016", 8000000],
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
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

  render() {
    const { mokas, totalTagihan } = this.state;
    return (
      <div className="container">
        <marquee style={{ fontWeight: "bold" }} bgcolor="FF8C00" align ="center" direction ="left" scrollamount="10"> SELAMAT DATANG DI OTOFAST, PUSAT JUAL BELI MOTOR BEKAS TERMURAH SEANTERO RAYA  </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#722ed1", fontFamily:"Arial", fontWeight: "bold" }}>Isi Data Pesanan</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label>Masukkan Nama:</label>
            </center>
            <div>
              <center>
              <input style={{
                  background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px"
                }}
                placeholder="Nama"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >Masukkan Alamat:</label>
            </center>
            <div>
              <center>
              <input style={{
                   background: "#efdbff",
                   color: "#4B0082",
                   margin: "auto",
                   height: "40px",
                   border: "#9254de",
                   fontSize: "15px"
                }}
                placeholder="Alamat"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >Masukkan No Hp:</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#efdbff",
                color: "#4B0082",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                placeholder="No Hp"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <br />
                <center>
                <label >Pilih Motor :    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">Motor</option>
                  <Fragment>
                    {mokas.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                <br />
                
              </div>
              <h2
                style={{
                  color: "#FF7F50",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"sans-serif",
                  fontStyle:"italic"
                }}
              >
                Total Harga {totalTagihan} 
              </h2>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Kasir;
