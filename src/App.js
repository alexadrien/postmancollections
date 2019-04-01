import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Text from "./components/Text";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Text variant="h6" color="inherit" grow>
              News
            </Text>
            <Button color="inherit"><AddIcon /></Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
