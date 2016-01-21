'use strict'

const React = require('react')

module.exports = React.createClass({
  render: function(){
    return(
      <main>
        {this.props.data}
      </main>
    )
  }
})
