import React, { Component } from 'react'

class App extends Component {
  state = {
    hueValue: 0,
    saturationValue: 0,
    lightnessValue: 0
  }

  componentDidMount() {
    this.randomColor()
  }

  randomColor = () => {
    this.setState({
      hueValue: Math.ceil(Math.random() * 360),
      saturationValue: Math.ceil(Math.random() * 100),
      lightnessValue: Math.ceil(Math.random() * 100)
    })
  }

  hueChangeStart = event => {
    console.log('changed!')
    console.log(event.target.value)
    this.setState({
      hueValue: event.target.value
    })
  }
  saturationChangeStart = event => {
    console.log('changed')
    console.log(event.target.value)
    this.setState({
      saturationValue: event.target.value
    })
  }
  lightnessChangeStart = event => {
    console.log('changed')
    console.log(event.target.value)
    this.setState({
      lightnessValue: event.target.value
    })
  }

  render() {
    return (
      <>
        <main
          style={{
            backgroundColor: `hsl(${this.state.hueValue},${
              this.state.saturationValue
            }%,${this.state.lightnessValue}%)`
          }}
        >
          <h1>Colors are Fun!</h1>
          <section>
            <p>
              <span />
            </p>
          </section>
          <div>
            <input
              value={this.state.hueValue}
              onValueChange={value => this.setState({ value })}
              onChange={this.hueChangeStart}
              type="range"
              min="0"
              max="360"
            />{' '}
            <label for="hue">Hue</label>
          </div>
          <div>
            <input
              value={this.state.saturationValue}
              onValueChange={value => this.setState({ value })}
              onChange={this.saturationChangeStart}
              type="range"
              id="start"
              name="Saturation"
              min="0"
              max="100"
            />{' '}
            <label for="saturation">Saturation</label>
          </div>
          <div>
            <input
              value={this.state.lightnessValue}
              onValueChange={value => this.setState({ value })}
              onChange={this.lightnessChangeStart}
              type="range"
              id="start"
              name="Lightness"
              min="0"
              max="100"
            />{' '}
            <label for="lightness">Lightness</label>
          </div>
          <h1>
            HSL:{this.state.hueValue}/{this.state.saturationValue}%/
            {this.state.lightnessValue}%
          </h1>
          <p>New Random Color Button</p>
          <button onClick={this.randomColor}>Select </button>
        </main>
      </>
    )
  }
}

export default App
