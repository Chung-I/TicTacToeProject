import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  main: {
    flex: 6,
    backgroundColor: 'skyblue',
  },
  footer: {
    flex: 1,
    backgroundColor: 'steelblue',
    flexDirection: 'row',
  },
  alignCenter:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'navy',
    fontSize: 36,
  },
  footerText: {
    color: 'white',
    fontSize:36,
  },
  playerTextInput: {
    margin: 24,
    fontSize: 28,
    borderRadius: 12,
    backgroundColor: 'steelblue',
    paddingLeft: 24,
    paddingRight: 24
  },
  startButton: {
    height: 36,
    backgroundColor: 'white',
    flex: 2,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 24
  },
  gameHeader: {
    flex: 1,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
  },
  versusImg: {
    width: 50,
    height: 50,
    flex: 1,
  }
});

module.exports = styles;
