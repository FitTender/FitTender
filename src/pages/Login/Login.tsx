import Footer from '../../components/molecules/Footer/Footer';
import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Props} from '../../../Paths';
import TextButton from '../../components/common/TextButton/TextButton';
import styles from './Login.module.scss';

interface LoginProps extends Props {}

const Login = ({navigation}: LoginProps) => {
  return (
    <View style={{height: '100%'}}>
      <Text>LOGO</Text>
      <TextInput className={styles.input} placeholder="이메일" />
      <TextInput className={styles.input} placeholder="비밀번호" />

      <Button title="로그인" />
      <View className={styles.textBtnContainer}>
        <TextButton
          title="비밀번호 찾기"
          className={styles.fintPwBtn}
          isBorder={true}
        />
        <TextButton title="회원가입" className={styles.signupBtn} />
      </View>

      <Footer />
    </View>
  );
};

export default React.memo(Login);
