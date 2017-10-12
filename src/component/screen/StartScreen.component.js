import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from 'src/style/main.style.js';
import EmptyDOM from 'src/component/EmptyDOM.component.js'

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.onStartGame = this.onStartGame.bind(this);
    this.state = {
      playerName1: '',
      playerName2: '',
    };
  }
  onStartGame = () => {
    this.props.navigation.navigate('Game', {
      playerName1: this.state.playerName1,
      playerName2: this.state.playerName2,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, styles.alignCenter]}>
          <Text style={[styles.headerText]}>TicTacToe</Text>
        </View>
        <View style={[styles.main, styles.alignCenter]}>
          <TextInput style={[styles.playerTextInput]}
            placeholder="玩家一"
            onChangeText={(playerName1) => {this.setState({playerName1});}}
          />
          <TextInput style={[styles.playerTextInput]}
            placeholder="玩家二"
          />
        </View>
        <View style={[styles.footer, styles.alignCenter]}>
          <EmptyDOM />
          <TouchableOpacity
            onPress={this.onStartGame}
            style={[styles.startButton, styles.alignCenter]}>
            <Text style={[styles.startButtonText]}>開始</Text>
          </TouchableOpacity>
          <EmptyDOM />
        </View>
      </View>
    );
  }
}
module.exports = StartScreen;
