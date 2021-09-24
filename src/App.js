import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import mokasImage from "./images/mokas.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#f0e6f7",
    color: "#330852",
    backgroundSize: "100%",
  },
  dark: {
    background: "#191970",
    color: "#191970",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "100%"  }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="F5FFFA" align ="center" direction ="left" scrollamount="10">  HALLO {valueInput.name} SELAMAT DATANG DI OTOFAST, PUSAT JUAL BELI MOTOR BEKAS TERMURAH SEANTERO RAYA </marquee>
      <button type="submit" style={{ float:"right", marginTop: "1%" }} class="searchButton">
      <FontAwesomeIcon icon={faSearch} />
     </button>
      <input className="search"
              onChange={(event) => handleIdPembelian(event, "name")}
              name="idPembelian"
              value={valueInput.name}
              style={{ color: "#6e0234", float: "right", width: "20%", marginTop: "1%"}}
              placeholder="Just For Fun, Masukkan nama anda"
            />
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
            <h3>OTOFAST</h3>
            <div className="gambar">
              <center>
              <Link to="/mokas">
                <img src={mokasImage} style={{ height: "500px"  }} />
              </Link>
              </center>
            </div>
          </div>
          </center>
          <marquee style={{ fontWeight: "bold" }} bgcolor="F5FFFA" align ="center" direction ="left" scrollamount="10"> Credits by Kuli Web Harian </marquee>
          </div>
          <h3>
          </h3>
    </ThemeContext.Provider>
    </body>
  );
}
