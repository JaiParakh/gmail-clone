import React from 'react';
import { List, Avatar, IconButton, Caption, Colors } from 'react-native-paper';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export default function MailThumbnail(props){

    let icon;
    if(props.starred){
        icon = <IconButton icon="star" color={Colors.yellow600} size={20} style={styles.starredTrue} />
    }else{
        icon = <IconButton icon="star-outline" size={20} style={styles.starredFalse} />
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
                style={styles.listItem}
                title={props.sender}
                titleStyle={{marginTop: -10,paddingTop: 0, fontSize: 18}}
                description={props.subject}
                descriptionNumberOfLines={1}
                left={() => <Avatar.Text size={42} label={props.avatar} style={[styles.avatar, {backgroundColor: props.avatarColor}]} />}
                right={() => (
                    <View style={{padding: 0,margin: 0}}>
                        <Caption style={styles.caption}>{props.time}</Caption>
                        {icon}
                    </View>
                )}
            />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    starredTrue: {marginBottom: 0,marginTop: 0, alignSelf: 'flex-end'},
    starredFalse: {marginBottom: 0,marginTop: 0, alignSelf: 'flex-end'},
    listItem: {margin: 5, marginBottom: 0,marginTop: 0, paddingTop: 3},
    caption: {marginTop: 0, paddingTop: 0},
    avatar: { backgroundColor: '#ff8c00', marginRight: 4}
});

//Colors: #a72680, #0091ad, #0081af, #8b38cb, #00abe7, #4357ad, #682d63, #ff8c00, #320dcf, #700353