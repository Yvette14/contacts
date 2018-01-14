import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, NativeModules} from 'react-native';
import Avatar from "./Avatar";
import {Actions} from 'react-native-router-flux';

const PhoneContacts = NativeModules.PhoneContacts;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  }
});

export default class Contacts extends Component {

  constructor(props){
    super(props);
    this.state={
      data: [],
    }
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this._handlePress(item)} style={styles.itemContainer}>
      <Avatar text={item.familyName}/>
      <Text>{item.fullName}</Text>
      <Text>{item.phoneNumber}</Text>
    </TouchableOpacity>
  );

  _handlePress = (item) => Actions.detail({item});


  _renderSeparator = () => (
    <View style={styles.separator}/>
  );

  componentDidMount() {
    PhoneContacts.show().then(data => this.setState({ data,}));
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    )
  }
}