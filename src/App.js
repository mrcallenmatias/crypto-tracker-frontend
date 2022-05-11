import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CryptoNew from "./pages/CryptoNew";
import CryptoEdit from "./pages/CryptoEdit";
import CryptoIndex from "./pages/CryptoIndex";
import CryptoShow from "./pages/CryptoShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cryptos: []
    }
  }

  componentDidMount() {
    this.readCrypto()
  }

  readCrypto = () => {
    fetch("http://localhost:3000/cryptos")
    .then(response => response.json())
    .then(payload => this.setState({cryptos: payload}))
    .catch(errors => console.log("Crypto read errors:", errors))
  }

  createCrypto = (newCrypto) => {
    fetch("http://localhost:3000/cryptos", {
      body: JSON.stringify(newCrypto),
      headers: {
        "Content-type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readCrypto())
    .catch(errors => console.log("Crypto create errors:", errors))
  }

  updateCrypto = (crypto, id) => {
    fetch(`http://localhost:3000/cryptos/${id}`, {
      body: JSON.stringify(crypto),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readCrypto())
    .catch(errors => console.log("Crypto update errors:", errors))
  }

  deleteCrypto = (id) => {
    fetch(`http://localhost:3000/cryptos/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readCrypto())
    .catch(errors => console.log("Crypto delete errors:", errors))
  }

  render() {
    return(
      <Router>
        <Header />
        <br/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/cryptoindex'
            render={(props) => <CryptoIndex
              cryptos={this.state.cryptos}/>}
          />
          <Route
            path='/cryptoshow/:id'
            render={(props) => {
              let id = props.match.params.id
              let crypto = this.state.cryptos.find(crypto => crypto.id === +id)
              return <CryptoShow crypto={crypto} deleteCrypto={this.deleteCrypto} />
            }}
          />
          <Route
            path='/cryptonew'
            render={(props) => <CryptoNew createCrypto={this.createCrypto}/>}
          />
          <Route
            path='/cryptoedit/:id'
            render={(props) => {
              let id = props.match.params.id
              let crypto = this.state.cryptos.find(crypto => crypto.id === +id)
              return <CryptoEdit updateCrypto={this.updateCrypto} crypto={crypto} />
            }}
          />
          <Route path='/home' component={Home} />
          <Route component={NotFound} />
        </Switch>
        <br/>
        <Footer />
      </ Router>
    )
  }
}

export default App
