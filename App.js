import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import StartScreen from 'src/component/screen/StartScreen.component.js';
import GameScreen from 'src/component/screen/GameScreen.component.js';

const TicTacToeNavigator = StackNavigator({
  Start: { screen: StartScreen},
  Game: { screen: GameScreen},
});

export default class TicTacToeApp extends Component {
  render() {
    return (
      <TicTacToeNavigator />
    );
  }
}
