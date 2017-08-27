import React,{ Component } from 'react'
import './style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'Input JSX to convert',
      output:'',
      err:''
    }
  }
  update = (e) => {
    let code = e.target.value;
    try {
      this.setState({
          output: window.Babel
              .transform(code, {presets:['es2015','react']})
              .code,
          err:''
      })
    }
    catch (err) {
      this.setState({err:err.message})
    }
  }
  render() {
    return(
        <div>
          <header>{this.state.err}</header>
          <div className="container">
            <textarea onChange={this.update}
                      placeholder={this.state.input}></textarea>
            <pre>
                {this.state.output}
            </pre>
          </div>
        </div>
    )
  }
}

export default App