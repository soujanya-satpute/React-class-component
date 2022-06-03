import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: { fname: 'Live', lname: 'Mort' },
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.fname} {this.state.name.lname}
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: { fname: 'Soujany', lname: 'satpute' },
                  }
                },
                () => {
                  console.log(this.state)
                }
              )
            }}
          >
            Change Button
          </button>
        </header>
      </div>
    )
  }
}

export default App
