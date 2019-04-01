import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Text from "./components/Text";
import data from "./data";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class App extends Component {
  handleCollectionClick = collection => () => {
    window.location  = `https://raw.githubusercontent.com/alexadrien/postmancollections/master/data/${collection.file}`;
  };

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
        <div>
          <List>
            {data.collections.map(collection => (
              <ListItem button onClick={this.handleCollectionClick(collection)}>
                <ListItemText primary={collection.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default App;
