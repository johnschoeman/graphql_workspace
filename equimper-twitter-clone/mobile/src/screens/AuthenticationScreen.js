import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

import SignupForm from '../components/SignupForm';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.SECONDARY};
  position: relative;
`;

const ButtonSignupText = styled.Text`
  color: ${props => props.theme.WHITE};
  fontWeight: bold;
  fontSize: 20;
`;

const ButtonSignup = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  height: 75;
  width: 150;
  backgroundColor: ${props => props.theme.PRIMARY};
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 30%;
  right: 0;
  borderTopLeftRadius: 20;
  borderBottomLeftRadius: 20;
  shadowOpacity: 0.4;
  shadowRadius: 5;
  shadowOffset: 0px 4px;
  shadowColor: #000;
  elevation: 2;
`;

const ButtonTextContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200;
  justifyContent: center;
  AlignItems: center;
`;

const ButtonLogin = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
})`
  justiftyContent: center;
  alignItems: center;
`;

const ButtonLoginText = styled.Text`
  color: ${props => props.theme.WHITE};
  fontWeight: 400;
  fontSize: 16;
`;

const initialState = {
  showSignup: false,
  showLogin: false,
};

class AuthenticationScreen extends Component {
  state = initialState;

  _onShowSignupPress = () => {
    this.setState({ showSignup: true });
  };

  _onBackPress = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { store } = this.props
    if (this.state.showSignup) {
      return (
        <Root>
          <SignupForm onBackPress={this._onBackPress} store={store}/>
        </Root>
      );
    }
    return (
      <Root>
        <ButtonSignup onPress={this._onShowSignupPress}>
          <ButtonSignupText>Get Started</ButtonSignupText>
        </ButtonSignup>
        <ButtonTextContainer>
          <ButtonLogin>
            <ButtonLoginText>Already Have An Account?</ButtonLoginText>
          </ButtonLogin>
        </ButtonTextContainer>
      </Root>
    );
  }
}

export default AuthenticationScreen;
