import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import StudentCard from "./StudentCard";
import moment from "moment";
import { getEvents } from "./StudentService";
import { getCountdownParts } from "./util";
import {NotificationManager} from 'react-notifications';

let notifSeen = false;

class StudentList extends Component {
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
    this.state.events.forEach(element => {
      Notification(element);
    });

    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <StudentCard eventItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("StudentForm")}
          title="добави ученик"
        />
      </View>
    );
  }
}

export default StudentList;

function Notification(studentItem){
  let countdown = null;
  let unexcusedAbsence = null;
  let notExcused = false;
  if (notifSeen === false) {
    studentItem.absences.forEach(absence => {
      if (!absence.excused) {
        notExcused = true;
        unexcusedAbsence = absence.date;
        countdown = getCountdownParts(moment(unexcusedAbsence, "DD/MM/YYYY hh:mm").toString());
        console.log(moment(absence.date, "DD/MM/YYYY hh:mm").toString());
        console.log(countdown);
      }
    });
    if (notExcused) {
      if (countdown.days <= -3) {
        notifSeen = true;
        NotificationManager.info("Неизвинени отсъствия", `${studentItem.title} има 1 или повече неизвинени отсъствия!`, 4000);
        console.log(notifSeen);
      }
    }
  }
}

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
})