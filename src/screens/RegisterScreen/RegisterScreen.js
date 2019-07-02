import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clientActions } from '../../store/ducks/client';

import { StatusBar, ScrollView } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { Container } from '../../components';
import { TextInputMask } from 'react-native-masked-text'
import { Loading } from '../../components';

import styles from './styles';
import { defaultTheme } from '../../styles/themes';
import { validate, alert } from '../../utils';

import uuidv1 from 'uuid/v1';

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
        uuid: '',
        name: '',
        birthDay: '',
        cpf: '',
        cellPhone: '',
        email: '',
        address: '',
        obs: ''
    };

    componentDidMount() {

        const client = this.props.navigation.getParam('client', null);

        if (client !== null) {
            const { uuid, name, birthDay, cpf, cell_phone, email, address, obs } = client;
            this.setState({ uuid, name, birthDay, cpf, cellPhone: cell_phone, email, address, obs });
        }

        this.props.navigation.setParams({
            save: this._save
        });
    }

    _onChangeHandler(fieldName, value) {
        this.setState({
            [fieldName]: value
        });
    }

    _save = () => {

        if (!this._verifiedFields()) {
            alert('Campos', 'Você deve preencher os campos obrigatórios');
            return;
        }

        const { uuid, name, birthDay, cpf, cellPhone, email, address, obs } = this.state;
        const { saveClient, updateClient } = this.props;

        if (uuid.length > 0) {

            const client = {
                uuid: uuid,
                name: name,
                birthDay: birthDay,
                cpf: cpf,
                cell_phone: cellPhone,
                email: email,
                address: address,
                obs: obs
            }

            updateClient(client);

        } else {
            const client = {
                uuid: uuidv1(),
                name: name,
                birthDay: birthDay,
                cpf: cpf,
                cell_phone: cellPhone,
                email: email,
                address: address,
                obs: obs
            }

            saveClient(client);
        }
    }

    /** VALIDAÇÕES */

    _showErrorName = () => {
        const { name } = this.state;
        if (name.length <= 0) {
            return false;
        }
        return !validate.isNameValid(name);
    }

    _helperTextTypeName = () => {
        const { name } = this.state;
        return name.length <= 0 ? 'info' : 'error';
    }

    _showErrorBirthDay = () => {
        const { birthDay } = this.state;
        if (birthDay.length <= 0) {
            return false;
        }
        return !validate.isDateValid(birthDay);
    }

    _helperTextTypeBirthDay = () => {
        const { birthDay } = this.state;
        return birthDay.length <= 0 ? 'info' : 'error';
    }

    _showErrorCPF = () => {
        const { cpf } = this.state;
        if (cpf.length <= 0) {
            return false;
        }
        const normalizeCPF = cpf.split('.').join('').replace('-', '');
        return !validate.isCPFValid(normalizeCPF);
    }

    _helperTextTypeCPF = () => {
        const { cpf } = this.state;
        return cpf.length <= 0 ? 'info' : 'error';
    }

    _showErrorCellPhone = () => {
        const { cellPhone } = this.state;
        if (cellPhone.length <= 0) {
            return false;
        }
        return !validate.isCellPhoneValid(cellPhone);
    }

    _helperTextTypeCellPhone = () => {
        const { cellPhone } = this.state;
        return cellPhone.length <= 0 ? 'info' : 'error';
    }

    _showErrorEmail = () => {
        const { email } = this.state;
        if (email.length <= 0) {
            return false;
        }
        return !validate.isEmailValid(email);
    }

    _helperTextTypeEmail = () => {
        const { email } = this.state;
        return email.length <= 0 ? 'info' : 'error';
    }

    _showErrorAddress = () => {
        const { address } = this.state;
        if (address.length <= 0) {
            return false;
        }
        return address.length < 3;
    }

    _helperTextTypeAddress = () => {
        const { address } = this.state;
        return address.length <= 0 ? 'info' : 'error';
    }

    _verifiedFields = () => {
        const { name, birthDay, cellPhone, email } = this.state;

        return validate.isNameValid(name) && validate.isDateValid(birthDay)
            && validate.isCPFValid(this.cpfField.current.getRawValue()) && validate.isCellPhoneValid(cellPhone)
            && validate.isEmailValid(email);
    }

    render() {

        const { name, cellPhone, cpf, birthDay, email, obs, address } = this.state;

        return (
            <ScrollView>
                <Container style={{ padding: 16 }}>
                    <StatusBar
                        backgroundColor={defaultTheme.primaryDark}
                        barStyle='light-content'
                    />

                    {/** NOME */}

                    <TextInput
                        label='Nome'
                        value={name}
                        onChangeText={text => this._onChangeHandler('name', text)}
                        returnKeyType='next'
                        error={this._showErrorName()}
                        onSubmitEditing={(event) => this.birthDayField.current.getElement().focus()}
                        ref={this.nameField}
                    />
                    <HelperText
                        type={this._helperTextTypeName()}
                        visible={name.length <= 0 || this._showErrorName()}>
                        {name.length <= 0 ? 'Campo obrigatório' : 'Nome inválido!'}
                    </HelperText>

                    {/** NASC */}

                    <TextInput
                        label='Nascimento'
                        value={birthDay}
                        onChangeText={text => this._onChangeHandler('birthDay', text)}
                        style={styles.input}
                        returnKeyType='next'
                        error={this._showErrorBirthDay()}
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
                    <HelperText
                        type={this._helperTextTypeBirthDay()}
                        visible={birthDay.length <= 0 || this._showErrorBirthDay()}>
                        {birthDay.length <= 0 ? 'Campo obrigatório' : 'Data de nascimento inválida!'}
                    </HelperText>

                    {/** CPF */}

                    <TextInput
                        label='CPF'
                        value={cpf}
                        onChangeText={text => this._onChangeHandler('cpf', text)}
                        style={styles.input}
                        returnKeyType='next'
                        error={this._showErrorCPF()}
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={'cpf'}
                                ref={this.cpfField}
                            />
                        )}

                        onSubmitEditing={(event) => this.cellField.current.getElement().focus()}
                    />
                    <HelperText
                        type={this._helperTextTypeCPF()}
                        visible={cpf.length <= 0 || this._showErrorCPF()}>
                        {cpf.length <= 0 ? 'Campo obrigatório' : 'CPF inválido!'}
                    </HelperText>

                    {/** CELL */}

                    <TextInput
                        label='Celular'
                        value={cellPhone}
                        onChangeText={text => this._onChangeHandler('cellPhone', text)}
                        style={styles.input}
                        returnKeyType='next'
                        error={this._showErrorCellPhone()}
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
                    <HelperText
                        type={this._helperTextTypeCellPhone()}
                        visible={cellPhone.length <= 0 || this._showErrorCellPhone()}>
                        {cellPhone.length <= 0 ? 'Campo obrigatório' : 'Celular deve começar com o digito 9!'}
                    </HelperText>

                    {/** EMAIL */}

                    <TextInput
                        label='E-mail'
                        value={email}
                        onChangeText={text => this._onChangeHandler('email', text)}
                        returnKeyType='next'
                        style={styles.input}
                        keyboardType='email-address'
                        error={this._showErrorEmail()}
                        ref={this.emailField}
                        onSubmitEditing={(event) => this.addressField.current.focus()}
                    />
                    <HelperText
                        type={this._helperTextTypeEmail()}
                        visible={email.length <= 0 || this._showErrorEmail()}>
                        {cellPhone.length <= 0 ? 'Campo obrigatório' : 'E-mail inválido!'}

                    </HelperText>

                    {/** ENDEREÇO */}

                    <TextInput
                        label='Endereço'
                        value={address}
                        returnKeyType='next'
                        onChangeText={text => this._onChangeHandler('address', text)}
                        style={styles.input}
                        error={this._showErrorAddress()}
                        ref={this.addressField}
                        onSubmitEditing={(event) => this.obsField.current.focus()}
                    />
                    <HelperText
                        type={this._helperTextTypeAddress()}
                        visible={address.length <= 0 || this._showErrorAddress()}>
                        Campo obrigatório!
                    </HelperText>

                    {/** OBS */}

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
                <Loading loading={this.props.storeClient.loading} />
            </ScrollView>
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
)(RegisterScreen);
