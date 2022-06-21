import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import EventEditForm from './EventEditForm';
import StudentAbsence from './StudentAbsence';
import ThankYou from './ThankYou';
import EventDeleted from './EventDeleted';
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
      <Stack.Navigator initialRouteName='EventList'>
      <Stack.Screen name='EventList' component={EventList} options={{title: 'Ученици'}} />
      <Stack.Screen name='EventForm' component={EventForm} options={{title: 'Добави ученик'}} />
      <Stack.Screen name='EventEditForm' component={EventEditForm} options={{title: 'Редактирай'}} />
      <Stack.Screen name='StudentAbsence' component={StudentAbsence} options={{title: 'Добави отсъвстие'}} />
      <Stack.Screen name='ThankYou' component={ThankYou} options={{title: 'Благодаря'}} />
      <Stack.Screen name='EventDeleted' component={EventDeleted} options={{title: 'Изтрий'}} />
      </Stack.Navigator>
      <NotificationContainer />
    </NavigationContainer>
  );
}