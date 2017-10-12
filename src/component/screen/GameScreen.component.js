import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import styles from 'src/style/main.style.js';
import EmptyDOM from 'src/component/EmptyDOM.component.js'

class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.onLeaveGame = this.onLeaveGame.bind(this);
  }
  onLeaveGame() {
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameHeader}>
          <EmptyDOM />
          <Image
            style={styles.versusImg}
            source={require('src/img/versus.png')}
          />
          <EmptyDOM />
        </View>
        <View style={[styles.main, styles.alignCenter]}>
          <Text>Gaming ...</Text>
        </View>
        <View style={[styles.footer, styles.alignCenter]}>
          <EmptyDOM />
          <TouchableOpacity
            onPress={this.onLeaveGame}
            style={[styles.startButton, styles.alignCenter]}>
            <Text style={[styles.startButtonText]}>離開</Text>
          </TouchableOpacity>
          <EmptyDOM />
        </View>
      </View>
    );
  }
}
module.exports = GameScreen;
