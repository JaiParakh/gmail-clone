import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, IconButton, Avatar, Caption, Button } from 'react-native-paper';

export default class MailBody extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View style={styles.mainContainer}>
                <ScrollView style={styles.scrollView}>
                    <Text style={{fontSize: 26}}>{this.props.route.params.subject}</Text>
                
                    <Card.Title 
                        title={this.props.route.params.sender}
                        style={styles.cardTitle}
                        subtitle="to me"
                        left={() => <Avatar.Text size={40} label={this.props.route.params.avatar} style={{marginRight: 4}} />}
                        right={() => (
                            <View style={{padding: 0, margin: 0}}>
                                <IconButton icon="reply" onPress={() => {}} />
                                <Caption style={{marginTop: 0, paddingTop: 0}}>{this.props.route.params.time}</Caption>
                            </View>
                        )}
                    />
                    <Card.Content style={{paddingLeft: 0, paddingRight: 0}}>
                        <Text>{this.props.route.params.body}</Text>
                    </Card.Content>
                    <Card.Actions style={{justifyContent: "space-around", marginVertical: 15}}>
                        <Button mode="outined" icon="reply" color='gray' uppercase={false} style={styles.buttonList} onPress={() => {console.log('Pressed')}}>
                            Reply
                        </Button>
                        <Button mode="outined" icon="reply-all" color='gray' uppercase={false} style={styles.buttonReplyAll} onPress={() => {console.log('Pressed')}}>
                            Reply All
                        </Button>
                        <Button mode="outined" icon="share" color='gray' uppercase={false} style={styles.buttonList} onPress={() => {console.log('Pressed')}}>
                            Share
                        </Button>
                    </Card.Actions>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonList: {flex: 1, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5},
    buttonReplyAll: {
        flex: 1, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5,
        paddingHorizontal: 5
    },
    cardTitle: {marginTop: 0, marginLeft: 0, paddingLeft: 0, marginBottom: 4},
    mainContainer: { backgroundColor: '#fff', height: '100%'},
    scrollView: {paddingTop: 0, paddingHorizontal: 12}
});