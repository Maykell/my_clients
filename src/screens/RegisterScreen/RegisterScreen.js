import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Container } from '../../components';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';
import { defaultTheme } from '../../styles/themes';


class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.nameField = React.createRef();
        this.birthDayField = React.createRef();
        this.cpfField = React.createRef();
        this.cellField = React.createRef();
        this.emailField = React.createRef();
        this.addressField = React.createRef();
        this.obsField = React.createRef();
    }

    state = {
        name: '',
        birthDay: '',
        cpf: '',
        cellphone: '',
        email: '',
        address: '',
        obs: ''
    };

    _onChangeHandler(fieldName, value) {
        this.setState({
            [fieldName]: value
        });
    }

    render() {
        return (
            <ScrollView>
                <Container style={{ padding: 16 }}>
                    <StatusBar
                        backgroundColor={defaultTheme.primaryDark}
                        barStyle='light-content'
                    />
                    <TextInput
                        label='Nome'
                        value={this.state.name}
                        onChangeText={text => this._onChangeHandler('name', text)}
                        style={styles.input}
                        returnKeyType='next'
                        onSubmitEditing={(event) => this.birthDayField.current.getElement().focus()}
                        ref={this.nameField}
                    />
                    <TextInput
                        label='Nascimento'
                        value={this.state.birthDay}
                        onChangeText={text => this._onChangeHandler('birthDay', text)}
                        style={styles.input}
                        returnKeyType='next'
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                ref={this.birthDayField}
                            />
                        )}
                        onSubmitEditing={(event) => this.cpfField.current.getElement().focus()}

                    />
                    <TextInput
                        label='CPF'
                        value={this.state.cpf}
                        onChangeText={text => this._onChangeHandler('cpf', text)}
                        style={styles.input}
                        returnKeyType='next'
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={'cpf'}
                                ref={this.cpfField}
                            />
                        )}
                        onSubmitEditing={(event) => this.cellField.current.getElement().focus()}
                    />
                    <TextInput
                        label='Celular'
                        value={this.state.cellphone}
                        onChangeText={text => this._onChangeHandler('cellphone', text)}
                        style={styles.input}
                        returnKeyType='next'
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                ref={this.cellField}
                            />
                        )}
                        onSubmitEditing={(event) => this.emailField.current.focus()}
                    />
                    <TextInput
                        label='E-mail'
                        value={this.state.email}
                        onChangeText={text => this._onChangeHandler('email', text)}
                        returnKeyType='next'
                        style={styles.input}
                        keyboardType='email-address'
                        ref={this.emailField}
                        onSubmitEditing={(event) => this.addressField.current.focus()}
                    />
                    <TextInput
                        label='Endereço'
                        value={this.state.address}
                        returnKeyType='next'
                        onChangeText={text => this._onChangeHandler('address', text)}
                        style={styles.input}
                        ref={this.addressField}
                        onSubmitEditing={(event) => this.obsField.current.focus()}
                    />
                    <TextInput
                        label='Observação'
                        value={this.state.obs}
                        returnKeyType='done'
                        multiline
                        onChangeText={text => this._onChangeHandler('obs', text)}
                        style={styles.input}
                        ref={this.obsField}
                    />
                </Container>
            </ScrollView>
        );
    }
}

export default RegisterScreen;
