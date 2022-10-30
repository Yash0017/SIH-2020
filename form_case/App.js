import React, {Component} from 'react';
import {Overlay} from 'react-native-elements';
import {Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isvisiable : true,
    }
  }
  render() {
    return (
      <View>
        <Overlay isVisible={this.state.isVisible}>
      <Text>Hello from Overlay!</Text>
      </Overlay>
      {
        this.state.visible && (
          <Overlay isVisible>
            <Text>Hello from Overlay!</Text>
          </Overlay>
        )
      }

      <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>

      <Overlay
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>
      </View>
    )
  }
}