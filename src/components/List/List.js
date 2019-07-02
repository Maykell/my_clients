import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ListEmpty, ListItem, Container } from '../../components';

import styles from './styles';

export default class List extends PureComponent {
    state = {
        selected: new Map(),
        query: ''
    }

    _onOpenCloseMenu = uuid => {
        const selected = new Map(this.state.selected);
        selected.set(uuid, !selected.get(uuid));
        this.setState({ selected })
    }

    _renderItem = ({ item }) => (
        <ListItem
            item={item}
            onOpenCloseMenu={this._onOpenCloseMenu}
            selected={!!this.state.selected.get(item.uuid)}
            removeItem={this.props.removeItem}
            navigation={this.props.navigation}
        />
    )

    _renderHeader = () => {
        const { query } = this.state;
        return (
            <Searchbar
                placeholder='Buscar clientes'
                onChangeText={query => { this.setState({ query }); }}
                value={query}
            />
        );
    }

    _renderList = () => {
        const { data } = this.props;
        const { query } = this.state;

        const filterItems = data.filter(item =>
            item.name.includes(query.toLowerCase()) ||
            item.birthDay.includes(query.toLowerCase()) ||
            item.cpf.includes(query.toLowerCase()) ||
            item.cell_phone.includes(query.toLowerCase()) ||
            item.email.includes(query.toLowerCase()) ||
            item.address.includes(query.toLowerCase()) ||
            item.obs.includes(query.toLowerCase()));

        return (
            <FlatList
                data={filterItems}
                extraData={this.state}
                keyExtractor={(item, index) => item + index}
                ListEmptyComponent={<ListEmpty title='Nao há clientes cadastrados' />}
                contentContainerStyle={styles.listContentContainer}
                renderItem={this._renderItem}
            />
        );
    }
    render() {

        return (
            <Container>
                {this._renderHeader()}
                {this._renderList()}
            </Container>
        );
    }
}
