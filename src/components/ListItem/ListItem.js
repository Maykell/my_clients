import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Card, TouchableRipple, Menu } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { screens } from '../../config';

import { withNavigation } from 'react-navigation';

class ListItem extends PureComponent {

    _onPress = () => {
        this.props.onOpenCloseMenu(this.props.item.uuid);
    };

    _handleListItem = (item) => {
        this._onPress();
        this.props.navigation.navigate(screens.RegisterScreen, {
            client: item
        });
    }

    render() {
        const { item } = this.props;

        return (
            <Card elevation={1.5} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <Avatar.Text size={45} label={item.name.substring(0, 1).toUpperCase()} />
                    <View style={styles.cardTextContainer}>
                        <Text numberOfLines={1} style={styles.cardTextName}>{item.name}</Text>
                        <Text numberOfLines={1} style={styles.cardTextEmail}>{item.email}</Text>
                    </View>
                    <Menu
                        key={item.uuid}
                        visible={this.props.selected}
                        onDismiss={this._onPress}
                        anchor={
                            <TouchableRipple borderless onPress={this._onPress}>
                                <Icon name='more-vert' size={26} />
                            </TouchableRipple>
                        }
                    >
                        <Menu.Item onPress={() => this._handleListItem(item)} title="Editar" />
                        <Menu.Item onPress={() => this.props.removeItem(item.uuid)} title="Excluir" />
                    </Menu>

                </Card.Content>

            </Card>

        );
    }
}

export default withNavigation(ListItem);
