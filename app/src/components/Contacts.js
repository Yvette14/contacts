import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, NativeModules} from 'react-native';
import Avatar from "./Avatar";
import {Actions} from 'react-native-router-flux';
import {fetchContacts} from '../actions/contacts'
import {dispatch} from 'redux';

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

class Contacts extends Component {

  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this._handlePress(item)} style={styles.itemContainer}>
      <Avatar/>
      <Text>{item.fullName}</Text>
      <Text>{item.phoneNumber}</Text>
    </TouchableOpacity>
  );

  _handlePress = (item) => Actions.detail({item});


  _renderSeparator = () => (
    <View style={styles.separator}/>
  );

  componentDidMount() {
    PhoneContacts.show().then(contacts => this.props.fetchContacts(contacts));
  }

  render() {
    return (
      <FlatList
        data={this.props.contacts || []}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactList
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: (contacts) => {
      dispatch(fetchContacts(contacts));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);