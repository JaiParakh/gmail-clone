import React from 'react';
import { View, TextInput as Input } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class ComposeMail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sender: "jaiparakh.kota.10@gmail.com",
            receiver: " ",
            subject: " ",
            body: ""
        }
    }

    render(){
        return(
            <View style={{backgroundColor: '#fff', height: '100%'}}>
                <TextInput style={{fontSize: 16, backgroundColor: '#fff'}}
                    value={this.state.sender}
                    onChangeText={(sender) => {this.setState({sender})}}
                    left={<TextInput.Affix textStyle={{marginRight: 15}} text="From" />}
                    right={<TextInput.Icon name="chevron-down" />}
                />
                <TextInput style={{fontSize: 16, backgroundColor: '#fff'}}
                    value={this.state.receiver}
                    onChangeText={(receiver) => {this.setState({receiver})}}
                    left={<TextInput.Affix textStyle={{marginRight: 15}} text="To" />}
                    right={<TextInput.Icon name="chevron-down" />}
                />
                <TextInput style={{fontSize: 16, backgroundColor: '#fff'}}
                    value={this.state.subject}
                    onChangeText={(subject) => {this.setState({subject})}}
                    left={<TextInput.Affix textStyle={{marginRight: 15}} text="Subject" />}
                />
                <Input style={{fontSize: 18, paddingTop: 15, paddingLeft: 10}}
                    value={this.state.body}
                    placeholder="Compose email"
                    onChangeText={(body) => {this.setState({body})}}
                    multiline={true}
                />
            </View>
        )
    }
}