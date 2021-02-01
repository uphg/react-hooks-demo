// class 组件 render 函数解决 this 的三种方式

import React from "react";

class Box extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }
  add1 = () => {
    this.setState((state) => ({
      number: state.number + 1
    }))
  }
  add2() {
    this.setState((state) => ({
      number: state.number + 1
    }))
  }
  add3() {
    this.setState((state) => ({
      number: state.number + 1
    }))
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <div>
          <button onClick={this.add1}>（一）点击加一</button>
          <button onClick={this.add2.bind(this)}>（二）点击加一</button>
          <button onClick={() => { this.add3() }}>（三）点击加一</button>
        </div>
      </div>
    )
  }
}

export default Box