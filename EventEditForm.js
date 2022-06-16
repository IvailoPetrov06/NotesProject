import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "./util";
import { editEvent, getEventById } from "./EventService";

class EventEditForm extends Component {
  state = {
    id: "",
    title: "",
    date: Date.now(),
    description: "",
    showDatePicker: false,
  };

  componentDidMount() {
    const eventId = this.props.route.params["id"];
    getEventById(eventId)
    .then(item => {
        this.setState({
            id: item._id,
            title: item.title,
            date: item.date,
            description: item.description
        })
    })
  }

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });
  };

  handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate });
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="ученик"
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />

        <TextInput
          style={styles.textInput}
          placeholder="дата на отсъствието"
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />
        {this.state.showDatePicker && (
          <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        )}
        <TextInput
          style={styles.textInput}
          placeholder="причина за отсъствието"
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button
          title="Edit"
          onPress={() => {
            editEvent({
              id: this.state.id,
              title: this.state.title,
              date: formatDate(this.state.date),
              description: this.state.description,
            }).then(() => this.props.navigation.goBack());
          }}
        />
      </View>
    );
  }
}
export default EventEditForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});