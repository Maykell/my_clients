import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clientActions } from '../../store/ducks/client';

import { StatusBar } from 'react-native';
import { FAB } from 'react-native-paper';

import { Container, List } from '../../components';
import { Loading } from '../../components';

import styles from './styles';
import { screens } from '../../config';
import { defaultTheme } from '../../styles/themes';

class MainScreen extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            this.props.getAllClients();
        });

    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    _renderList = () => (
        <List
            data={this.props.storeClient.data}
            removeItem={this.props.removeClient} />
    )

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
                <Loading loading={this.props.storeClient.loading} />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    storeClient: state.client
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(clientActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);
