'use strict'

const React = require('react')

module.exports = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  handleClickNavItem(idx) {
    this.props.onChangeNav(idx);
  }
  render() {
    let selectedStyle = {
      backgroundColor: '#000',
      color: '#fff'
    }

    return (
      <li
        style={this.state.selected ? selectedStyle : {}}
        onClick={this.handleClickNavItem.bind(this, this.props.idx)}
      >
        {this.props.title}
      </li>
    )
  }
}
