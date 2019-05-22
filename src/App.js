import React, { Component } from 'react'

class App extends Component {
  state = {
    hueValue: 0
  }

  getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16)
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
        <main>
          <header>This is the Header!</header>
          <section>
            <p>
              <span />
            </p>
          </section>
          <div>
            <input
              onChange={this.hueChangeStart}
              type="range"
              min="0"
              max="360"
            />{' '}
            <label for="hue">Hue</label>
          </div>
          <div>
            <input
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
            HSL :<span> </span>
          </h1>
          <p>New Random Color Button</p>
          <button onClick={this.getRandomColor}>Select </button>
          <p>Random Color Value:</p>
        </main>
      </>
    )
  }
}

export default App
