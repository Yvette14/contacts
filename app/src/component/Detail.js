import React, {Component} from 'react';
import {Text, View} from "react-native";

export default class Detail extends Component {
  constructor(props){
    super(props);

  }

  render() {

    return (
      <View>
        <Text>{this.props.item.firstName}</Text>
      </View>
    )
  }
}