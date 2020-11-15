import React from 'react';
import { List, Avatar, IconButton, Caption, Colors } from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';

export default function MailThumbnail(props){

    let icon;
    if(props.starred){
        icon = <IconButton icon="star" color={Colors.yellow600} size={20} style={{marginBottom: 0,marginTop: 0, alignSelf: 'flex-end'}} />
    }else{
        icon = <IconButton icon="star-outline" size={20} style={{marginBottom: 0,marginTop: 0, alignSelf: 'flex-end'}} />
    }
    
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('MailBody', {
            subject: props.subject,
            sender: props.sender,
            avatar: props.avatar,
            body: props.body,
            time: props.time
        })}>

            <List.Item
                style={{margin: 5, marginBottom: 0,marginTop: 0, paddingTop: 3}}
                title={props.sender}
                titleStyle={{marginTop: -10,paddingTop: 0, fontSize: 18}}
                description={props.subject}
                descriptionNumberOfLines={1}
                left={() => <Avatar.Text size={42} label={props.avatar} style={{marginRight: 4}} />}
                right={() => (
                    <View style={{padding: 0,margin: 0}}>
                        <Caption style={{marginTop: 0, paddingTop: 0}}>{props.time}</Caption>
                        {icon}
                    </View>
                )}
            />

        </TouchableOpacity>
    );
}