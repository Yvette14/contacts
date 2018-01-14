import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';
import backgroundRound from '../../images/round.png';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flexShrink: 1,
    aspectRatio: 1,
  },
  text: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#fff',
  }
});

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    props = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={backgroundRound}/>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    );
  }
}