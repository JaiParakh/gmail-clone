import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { List, Badge, Title, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// navigate to a route and then pass the desired status as props to the component.

export default function DrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.userInfoSection}>
                <Avatar.Image
                    source={{
                    uri:
                        'https://media-exp1.licdn.com/dms/image/C5103AQHd3S5dgOi0WA/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=BHOlZgO5jjPKfsFV-vT2Ni2h7AJ35-Aw0kSf6jrJ51g',
                    }}
                    size={60}
                />
                <Title>Jai Parakh</Title>
            </View>
            <View style={styles.drawerContent} >
                <List.Item
                    title="Primary"
                    titleStyle={styles.listItemTitle}
                    style={styles.listItem}
                    left={() => <List.Icon color="gray" icon="inbox" />}
                />
                <List.Item style={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    title="Social"
                    left={() => <List.Icon color="gray" icon="account-multiple" />}
                    right={() => <View style={{marginTop: 18, marginRight: 10}}><Badge style={{paddingLeft: 10, paddingRight: 10}} size={22}>2 new</Badge></View> }
                />
                <List.Item style={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    title="Promotions"
                    left={() => <List.Icon color="gray" icon="tag-outline" />}
                />
                <List.Section style={styles.listSection}>
                    <List.Subheader>Recent Labels</List.Subheader>
                    <List.Item
                        title="Banking"
                        titleStyle={styles.listItemTitle}
                        style={styles.listItem}
                        left={() => <List.Icon color="gray" icon="label-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Freelancing"
                        left={() => <List.Icon color="gray" icon="label-outline" />}
                    />
                </List.Section>
                <List.Section style={styles.listSection}>
                    <List.Subheader>All Labels</List.Subheader>
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Starred"
                        left={() => <List.Icon color="gray" icon="star-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Snoozed"
                        left={() => <List.Icon color="gray" icon="clock-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Important"
                        left={() => <List.Icon color="gray" icon="label-variant-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Sent"
                        left={() => <List.Icon color="gray" icon="send" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Drafts"
                        left={() => <List.Icon color="gray" icon="file-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Spam"
                        left={() => <List.Icon color="gray" icon="alert-octagon-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Trash"
                        left={() => <List.Icon color="gray" icon="trash-can-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="Job Applications"
                        left={() => <List.Icon color="gray" icon="label-outline" />}
                    />
                    <List.Item style={styles.listItem}
                        titleStyle={styles.listItemTitle}
                        title="College"
                        left={() => <List.Icon color="gray" icon="label-outline" />}
                    />
                </List.Section>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: "center",
    marginTop: 10
  },
  listItem: {marginTop: -14,marginBottom: -12},
  listItemTitle: {color: 'gray'},
  listSection: {marginTop: -3}
});