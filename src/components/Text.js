import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class Text extends Component {
  render() {
    return (
      <Typography {...this.props} style={{
        flexGrow: `${this.props.grow ? '1' : null}`
      }}>
        {this.props.children}
      </Typography>
    );
  }
}
