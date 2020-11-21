import React from 'react';
import { View, TextInput as Input, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class ComposeMail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sender: "contact.jaiparakh@gmail.com",
            receiver: " ",
            subject: " ",
            body: ""
        }
    }

    render(){
        return(
            <View style={{backgroundColor: '#fff', height: '100%'}}>
                <TextInput style={styles.textInput}
                    value={this.state.sender}
                    onChangeText={(sender) => {this.setState({sender})}}
                    left={<TextInput.Affix textStyle={styles.textInputAffix} text="From" />}
                    right={<TextInput.Icon name="chevron-down" />}
                />
                <TextInput style={styles.textInput}
                    value={this.state.receiver}
                    onChangeText={(receiver) => {this.setState({receiver})}}
                    left={<TextInput.Affix textStyle={styles.textInputAffix} text="To" />}
                    right={<TextInput.Icon name="chevron-down" />}
                />
                <TextInput style={styles.textInput}
                    value={this.state.subject}
                    onChangeText={(subject) => {this.setState({subject})}}
                    left={<TextInput.Affix textStyle={styles.textInputAffix} text="Subject" />}
                />
                <Input style={styles.inputBody}
                    value={this.state.body}
                    placeholder="Compose email"
                    onChangeText={(body) => {this.setState({body})}}
                    multiline={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {fontSize: 16, backgroundColor: '#fff'},
    textInputAffix: {marginRight: 15},
    inputBody: {fontSize: 18, paddingTop: 15, paddingLeft: 10}
});