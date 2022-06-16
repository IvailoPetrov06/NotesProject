import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import EventCard from "./EventCard";
import moment from "moment";
import { getEvents } from "./EventService";

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      getEvents().then(events => this.setState({events}));
    });

    setInterval(() => {
      this.setState({
        events: this.state.events.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <EventCard eventItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("EventForm")}
          title="добави ученик"
        />
      </View>
    );
  }
}

export default EventList;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
})