'use strict'

const React = require('react')
const HeaderNavItem = require('./HeaderNavItem')
// require('jquery-ui/sortable')

module.exports = class extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   nav: 'Home'
    // }
  }

  handleChangeNavItem(idx) {
    console.log(idx);
    this.props.onChangeNav(idx);

    this.refs.navigation.className = 'navigation'

    this.props.nav.forEach((item, i) => {
      this.refs['item' + i].setState({ selected: i === idx})
    })
  }

  componentDidMount() {
    // $(this.refs.navigation).sortable();
  }

  render() {
    return (
      <header>
        <ul ref="navigation">
        {
          this.props.nav.map((item, i) => {
            return <HeaderNavItem
              key={i}
              ref={'item'+i}
              idx={i}
              selected={this.props.selectedIdx === i}
              title={item}
              onChangeNav={this.handleChangeNavItem.bind(this)}
            />
          })
        }
        </ul>
      </header>
    )
  }
}
