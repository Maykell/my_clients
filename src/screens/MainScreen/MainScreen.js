import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { FAB, Avatar, Card, TouchableRipple } from 'react-native-paper';

import { Container, ListEmpty } from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { screens } from '../../config';
import { defaultTheme } from '../../styles/themes';

class MainScreen extends Component {
    state = {
        data: [
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            },
            {
                name: 'Maykel Matheus Dias',
                email: 'maykel.winchester@hotmail.com'
            },
            {
                name: 'Mariana Guimarães Pegoraro',
                email: 'marih_gp@hotmail.com'
            }
        ]
    }

    _renderList = () => {
        return (
            <FlatList
                data={this.state.data}
                ListEmptyComponent={<ListEmpty title='No clients register' />}
                contentContainerStyle={styles.listContentContainer}
                renderItem={({ item, index }) => (
                    this._renderListItem(item, index)
                )}
                keyExtractor={(item, index) => item + index}
            />
        );
    }

    _renderListItem = (item, index) => (
        <Card elevation={1.5} accessible style={styles.card} onPress={() => { alert("test") }}>
            <Card.Content style={styles.cardContent}>
                <Avatar.Text size={40} label={item.name.substring(0, 1)} />
                <View style={styles.cardTextContainer}>
                    <Text numberOfLines={1} style={styles.cardTextName}>{item.name}</Text>
                    <Text numberOfLines={1} style={styles.cardTextEmail}>{item.email}</Text>
                </View>
                <TouchableRipple borderless>
                    <Icon name='keyboard-arrow-right' size={26} />
                </TouchableRipple>
            </Card.Content>

        </Card>
    )

    _handleListItem = (item) => {
        this.props.navigation.navigate(screens.RegisterScreen, {
            client: item
        });
    }

    _navigateToRegisterScreen = () => {
        this.props.navigation.navigate(screens.RegisterScreen);
    }

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={defaultTheme.primaryDark}
                    barStyle='light-content'
                />
                {this._renderList()}
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => this._navigateToRegisterScreen()}
                />
            </Container>
        );
    }
}

export default MainScreen;