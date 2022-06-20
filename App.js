import React from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import StudentEditForm from './StudentEditForm';
import StudentAbsence from './StudentAbsence';
import ThankYou from './ThankYou';
import StudentDeleted from './StudentDeleted';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';
import {NotificationContainer} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
       isReadyRef.current = true;
      }}
    >
      <Stack.Navigator initialRouteName='StudentList'>
      <Stack.Screen name='StudentList' component={StudentList} options={{title: 'Ученици'}} />
      <Stack.Screen name='StudentForm' component={StudentForm} options={{title: 'Добави ученик'}} />
      <Stack.Screen name='StudentEditForm' component={StudentEditForm} options={{title: 'Редактирай'}} />
      <Stack.Screen name='StudentAbsence' component={StudentAbsence} options={{title: 'Добави отсъвстие'}} />
      <Stack.Screen name='ThankYou' component={ThankYou} options={{title: 'Благодаря'}} />
      <Stack.Screen name='StudentDeleted' component={StudentDeleted} options={{title: 'Изтрий'}} />
      </Stack.Navigator>
      <NotificationContainer />
    </NavigationContainer>
  );
}