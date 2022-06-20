import React, { Component } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteEvent, getAbsenceById, changeAbsence } from "./StudentService";
import * as RootNavigation from "./RootNavigation";

export default function StudentCard({ eventItem }) {
  function RenderButton(studentId, date, description, excused){
    if (excused) {
      return <Button title="Неизвинено" onPress={() => changeAbsence({
        studentId: studentId, 
        date: date, 
        description: description, 
        excused: false
      })}></Button>
    } else {
      return <Button title="Извинено" onPress={() => changeAbsence({
        studentId: studentId,  
        date: date, 
        description: description, 
        excused: true
      })}></Button>
    }
  }

  return (
    <View style={styles.StudentCard}>
      <View style={styles.StudentCardHeader}>
        <Text style={styles.title}>{eventItem.title}</Text>
        <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
      </View>
      <Text style={styles.description}>{eventItem.description}</Text>
      <View>
        <FlatList
          data={eventItem.absences}
          renderItem={({item}) => 
          <View style={styles.absence}>
            <Text style={styles.description}>{item.description} - {item.date}</Text>
            {RenderButton(eventItem._id, item.date, item.description, item.excused)}
          </View>
         }
        ></FlatList>
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("StudentEditForm", {
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
        </View>
        <View style={styles.mt10}>
         <Button
          onPress={() => {
            deleteEvent(eventItem._id);
            RootNavigation.navigate("StudentDeleted", {});
          }}
          title="изтрий"
        />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  StudentCard: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#023e8a",
    width: "100%",
  },
  StudentCardHeader: {
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
  absence: {
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
