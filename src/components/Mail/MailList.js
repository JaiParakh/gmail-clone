import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Searchbar, FAB, Subheading, Portal,Provider } from 'react-native-paper';

import MailThumbnail from './MailThumbNail';

let mails = [
    {
        id: "1",
        subject: "Jai, these PHP, HTML and Javascript technologies have topped the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false,
        avatarColor: '#a72680'
    },
    {
        id: "2",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to these javascript jobs. Many more coming next week",
        avatar: "G",
        time: "11:15 AM",
        starred: false,
        avatarColor: '#0091ad'
    },
    {
        id: "3",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: true,
        avatarColor: '#0081af'
    },
    {
        id: "4",
        subject: "Jai, these PHP, HTML and Javascript technologies have topped the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false,
        avatarColor: '#a72680'
    },
    {
        id: "5",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: true,
        avatarColor: '#8b38cb'
    },
    {
        id: "6",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: false,
        avatarColor: '#4357ad'
    },
    {
        id: "7",
        subject: "Jai, these PHP, HTML and Javascript technologies have topped the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false,
        avatarColor: '#0091ad'
    },
    {
        id: "8",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: true,
        avatarColor: '#0081af'
    },
    {
        id: "9",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: false,
        avatarColor: '#00abe7'
    },
    {
        id: "10",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false,
        avatarColor: '#ff8c00'
    },
    {
        id: "11",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false,
        avatarColor: '#ff8c00'
    },
    {
        id: "12",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false,
        avatarColor: '#ff8c00'
    },
    {
        id: "13",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false,
        avatarColor: '#ff8c00'
    }
]

class MailList extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
    }

    renderItems = ({item}) => {
        return <MailThumbnail navigation={this.props.navigation} keyy={item.id} body={item.body} avatarColor={item.avatarColor} avatar={item.avatar} sender={item.sender} subject={item.subject} time={item.time} starred={item.starred} />
    }

    render(){
        return(
            <Provider>
            <View style={{height: '100%',paddingTop: 20, backgroundColor: '#fff'}}>
            <Portal>
                <Searchbar
                    placeholder="Search in Mail"
                    onChangeText={(search) => {this.setState({search})}}
                    value={this.state.search}
                    icon="menu"
                    style={{margin: 15, marginTop: 35}}
                    onIconPress={() => this.props.navigation.toggleDrawer()}
                />
            </Portal>
                <FlatList style={{paddingTop: 70}} data={mails} keyExtractor={item => item.id} renderItem={this.renderItems} />
                <FAB
                    style={styles.fab}
                    icon="pencil"
                    onPress={() => {
                        this.props.navigation.navigate('ComposeMail');
                        console.log('Pressed');
                    }}
                />
            </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        margin: 16,
        backgroundColor: 'red'
    },
    heading: {marginLeft: 17, marginBottom: 6, fontSize: 14, marginTop: 65}
});

export default MailList;