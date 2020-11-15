import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar, FAB, Subheading } from 'react-native-paper';

import MailThumbnail from './MailThumbNail';

let mails = [
    {
        id: "1",
        subject: "Jai, these PHP, HTML and Javascript technologies have toppend the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false
    },
    {
        id: "2",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false
    },
    {
        id: "3",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: true
    },
    {
        id: "4",
        subject: "Jai, these PHP, HTML and Javascript technologies have toppend the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false
    },
    {
        id: "5",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: true
    },
    {
        id: "6",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: false
    },
    {
        id: "7",
        subject: "Jai, these PHP, HTML and Javascript technologies have toppend the charts",
        sender: "Freelancer.com",
        body: "Freelacer Hi Jai, here are the latest \n\n\n\n\n\n\n\n\n\n\n\n\n\n Testing",
        avatar: "F",
        time: "11:44 AM",
        starred: false
    },
    {
        id: "8",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: true
    },
    {
        id: "9",
        subject: "Hashedin - shortlisted 199 students f...",
        sender: "anita marwaha",
        body: "Kind attn. batch 2020...",
        avatar: "A",
        time: "11:07 AM",
        starred: false
    },
    {
        id: "10",
        subject: "slice: Apply Now",
        sender: "Glassdoor",
        body: "Glassdoor Don't forget to apply to th...",
        avatar: "G",
        time: "11:15 AM",
        starred: false
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
        return <MailThumbnail navigation={this.props.navigation} keyy={item.id} body={item.body} avatar={item.avatar} sender={item.sender} subject={item.subject} time={item.time} starred={item.starred} />
    }

    render(){
        return(
            <View style={{height: '100%',paddingTop: 20, backgroundColor: '#fff'}}>
            
                <Searchbar
                    placeholder="Search in Mail"
                    onChangeText={(search) => {this.setState({search})}}
                    value={this.state.search}
                    icon="menu"
                    style={{margin: 15}}
                    onIconPress={() => console.log("Yolo")}
                />
                
                <Subheading style={{marginLeft: 17, marginBottom: 6, fontSize: 14}}>PRIMARY</Subheading>
                <FlatList data={mails} keyExtractor={item => item.id} renderItem={this.renderItems} />
                <FAB
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 10,
                        margin: 16,
                        backgroundColor: 'red'
                    }}
                    icon="pencil"
                    onPress={() => {
                        this.props.navigation.navigate('ComposeMail');
                        console.log('Pressed');
                    }}
                />
            </View>
        )
    }
}

export default MailList;