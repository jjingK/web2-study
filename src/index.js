'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Test = require('./components/test')
const Header = require('./components/Header')
const Content = require('./components/Content')
const Footer = require('./components/Footer')

/*
  Root
    Header
      HeaderNavItem
    Content
    Footer
*/

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: this.props.nav[0]
      // ,navIdx: 0
    };
  }
  handleChangeNav(idx) {
    console.log(this.props.nav[idx])
    this.setState({
      nav: this.props.nav[idx]
      // ,navIdx : idx
    })
  }
  render() {
    return (
      <div>
        <Header
          nav={this.props.nav}
          onChangeNav={this.handleChangeNav.bind(this)}
        />
        <Content data={this.state.nav}/>
        <Footer />
      </div>
    )
  }
};

const navLists = ['Home','About','Features','Help']

ReactDOM.render(
  <Root nav={navLists}/>,
  document.getElementById('main')
)
