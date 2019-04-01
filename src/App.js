import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Text from "./components/Text";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Text variant="h6" color="inherit" grow>
              Postman Collections
            </Text>
            <Button color="inherit">
              <AddIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
