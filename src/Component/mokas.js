import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';


export default class Handphone extends Component {
    constructor(props) {
		super(props);
		this.state = {
			recipe: [],
			visible: false,
		};
	}

	handleButton = (steps) => {
		alert("Spesifikasi : " + steps);
	};
	
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
				recipe: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div style={{ backgroundColor: "#00FF00" }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="FAF0E6" align ="center" direction ="left" scrollamount="10"> SELAMAT DATANG DI OTOFAST, PUSAT JUAL BELI MOTOR BEKAS TERMURAH SEANTERO RAYA  </marquee>
        <div style={{ marginTop: 20 }}>
      <center>
      <input className="search"
              style={{ color: "#6e0234"}}
              placeholder="Masukkan Nama Merk"
            />
      <button type="submit" class="searchButton">
      <FontAwesomeIcon icon={faSearch} />
     </button>
            </center>
        <div className="marquee" >
            <center>
              <h3> ... Search Data ...</h3>
        </center>
        </div>
				<Grid container
                    md={11}
                    spacing={4}
                    style={{ margin:"auto", backgroundColor: "#F9F871" }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="strech"
					
                >
					{this.state.recipe.map((results, index) => {
						return (
							<Grid item key={results.name} md={3}>
								<Card>
									<CardActionArea onClick={() => this.handleButton(results.steps)}>
										<CardContent style={{ backgroundColor: "#191970", textAlign: "center", color: "#ededed" }} >
                                                                                            <CardMedia
                                                    style={{
														height: "150px",
														margin: "auto",
														paddingTop: "5%",
                                                        // margin: "1px",
                                                        // padding: "auto",
                                                        borderRadius: "8px",
                                                        // height: "80px",
                                                        // width: "80px"
                                                    }}
                                                    component="img"
                                                    image={results.image}
                                                />
                                            
											<Typography style={{ fontWeight: "bold" }}>
												<br/>{results.name}
											</Typography>
											<Typography>
												Harga : {results.ingredients}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>                
                <br/><br/><br/><br/>
			</div>
      </div>
            
		)
	}
}