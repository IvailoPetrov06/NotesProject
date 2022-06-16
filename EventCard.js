import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteEvent } from "./EventService";
import * as RootNavigation from "./RootNavigation";

export default function EventCard({ eventItem }) {
  const countdown = getCountdownParts(eventItem.date);

  return (
    <View style={styles.eventCard}>
      <View style={styles.eventCardHeader}>
        <Text style={styles.title}>{eventItem.title}</Text>
        <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
      </View>
      <Text style={styles.description}>{eventItem.description}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
        </View>
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("EventEditForm", {
              id: eventItem._id,
            })
          }
          title="редактиране"
        />
      </View>
      <View>
      <View style={styles.mt10}>
        </View>
        <View style={styles.mt10}>
        <Button color = "grey"
          onPress={() =>
            RootNavigation.navigate("StudentAbsence", {
              id: eventItem._id,
            })
          }
          title="Добави отсъствие"
        />
      </View>
        />
        </View>
        <View style={styles.mt10}>
         <Button
          onPress={() => {
            deleteEvent(eventItem._id);
            RootNavigation.navigate("EventDeleted", {});
          }}
          title="изтрий"
        />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#023e8a",
    width: "100%",
  },
  eventCardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    color: "#fff",
    textAlign: "left",
    flexBasis: "80%",
    fontWeight: "bold",
  },
  date: {
    textAlign: "right",
    flexBasis: "20%",
    fontSize: 20,
    color: "#ffffff",
  },
  description: {
    fontSize: 20,
    marginTop: 16,
    color: "#fff",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginTop: 30,
  },
  counter: {
    flexBasis: "25%",
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  counterLabel: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
});
