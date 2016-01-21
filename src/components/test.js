'use strict'
const React = require('react')

module.exports = React.createClass({
  render: function(){
    // console.log(this.props.data);

    return(
      <div className="testBox">
        {this.props.data}, world! I am a TestBox.
      </div>
    )
  }
})
