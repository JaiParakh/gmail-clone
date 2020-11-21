import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import MailList from './Mail/MailList';
import ComposeMail from './Mail/ComposeMail';
import MailBody from './Mail/MailBody';

const Stack = createStackNavigator();

const MailBodyHeader = ({navigation}) => (
    <Appbar.Header style={styles.appbar}>
    	<Appbar.BackAction onPress={navigation.goBack} />
      	<Appbar.Content title="" />
		<Appbar.Action
			icon="archive"
			onPress={() => console.log('Pressed archive')}
		/>
		<Appbar.Action icon="email-outline" onPress={() => console.log('Pressed mail')} />
		<Appbar.Action
			icon="delete-outline"
			onPress={() => console.log('Pressed delete')}
		/>
		<Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed More')} />
    </Appbar.Header>
);

const ComposeHeader = ({navigation}) => (
	<Appbar.Header style={styles.appbar}>
		<Appbar.BackAction onPress={navigation.goBack} />
		<Appbar.Content title="Compose" />
		<Appbar.Action icon="attachment" onPress={() => console.log('Pressed')} />
		<Appbar.Action icon="send" onPress={() => console.log("Pressed")} />
		<Appbar.Action icon="dots-vertical" onPress={() => console.log("Presed")} />
	</Appbar.Header>
)

export default function AppNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MailList" component={MailList} options={{headerShown: false}} />
			<Stack.Screen name="MailBody" component={MailBody} options={{header: MailBodyHeader}} />
			<Stack.Screen name="ComposeMail" component={ComposeMail} options={{header: ComposeHeader }} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	appbar: {backgroundColor: '#fff', elevation: 0}
});