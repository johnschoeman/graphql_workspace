import React, { Component } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import { Platform, Keyboard } from 'react-native';

import { colors } from '../utils/constants'

const Root = styled(Touchable).attrs({
  feedback: 'none'
})`
  flex: 1;
  position: relative;
`;

const Wrapper = styled.View`
  alignSelf: center;
  alignItems: center;
  justifyContent: center;
  width: 90%;
  height: 100%;
`;

const BackButton = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 }
})`
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 5%;
  left: 5%;
  zIndex: 1;
`

const ConfirmButton = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  position: absolute;
  bottom: 15%;
  width: 70%
  height: 50;
  backgroundColor: ${props => props.theme.PRIMARY};
  borderRadius: 10;
  justifyContent: center;
  alignItems: center;
  shadowColor: #000;
  shadowOpacity: 0.2;
  shadowRadius: 5;
  shadowOffset: 0px 2px;
  elevation: 2;
`

const ConfrimButtonText = styled.Text`
  color: ${props => props.theme.WHITE}
  fontWeight: 600;
  fontSize: 16;
`

const InputWrapper = styled.View`
  width: 70%
  height: 50;
  borderBottomWidth: 2;
  borderBottomColor: ${props => props.theme.LIGHT_GRAY};
  marginVertical: 5;
  justifyContent: flex-end;
`

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: Platform.OS === 'ios' ? colors.PRIMARY : undefined,
  autoCorrect: false,
})`
  height: 30;
  widht: 100%;
  color: ${props => props.theme.WHITE};
`;

class SignupForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: ''
  }

  _onOutsidePress = () => {
    Keyboard.dismiss();
  }

  _onChangeText = (text, type) => {
    this.setState({ [type]: text });
  }

  _checkDisabled = () => {
    const { fullName, email, password, username } = this.state;

    if (!fullName || !email || !password || !username) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress} >
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input 
              placeholder="Full Name"
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, 'fullName')}
           />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Email" 
              keyboardType="email-address"
              onChangeText={text => this._onChangeText(text, 'email')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input 
              placeholder="Password" 
              secureTextEntry
              onChangeText={text => this._onChangeText(text, 'password')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input 
              placeholder="Username" 
              autoCapitalize="none"
              onChangeText={text => this._onChangeText(text, 'username')}
            />
          </InputWrapper>
          <ConfirmButton disabled={this._checkDisabled()}>
            <ConfrimButtonText >
              Sign Up
            </ConfrimButtonText>
          </ConfirmButton>
        </Wrapper>
      </Root>
    )
  }
}

export default SignupForm