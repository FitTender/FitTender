import Footer from '../../components/molecules/Footer/Footer';
import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {PathKey, Props} from '../../../Paths';
import TextButton from '../../components/common/TextButton/TextButton';
import styles from './Login.module.scss';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import ErrorMsg, {
  ErrorMsgWrapper,
} from '../../components/molecules/ErrorMsg/ErrorMsg';
import {isValidEmail} from '../../shared/FormUtils';

interface LoginProps extends Props {}

type FormData = {
  email: string;
  pw: string;
};

const Login = ({navigation}: LoginProps) => {
  const {
    getValues,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const [isValidUser, setIsValidUser] = React.useState<boolean>(true);

  const onSubmit = React.useCallback((data: FieldValues) => {
    // form rules로 걸린 validation이 모두 성공한 경우에만 실행됨
    console.log(data);
    setIsValidUser(prev => !prev);

    // login api
  }, []);

  const chkValidateEmail = React.useCallback(() => {
    return isValidEmail(getValues('email'));
  }, []);

  const onNavigateFindPw = React.useCallback(() => {
    // navigation.push(PathKey.FindPW);
  }, []);

  const onNavigateRegister = React.useCallback(() => {
    // navigation.push(PathKey.SignUp);
  }, []);

  return (
    <View style={{height: '100%'}}>
      <Text>LOGO</Text>

      <Controller
        control={control}
        name="email"
        rules={{required: true, validate: chkValidateEmail}}
        defaultValue={''}
        render={({field}) => {
          return (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              className={styles.input}
              placeholder="Email"
            />
          );
        }}
      />
      <ErrorMsgWrapper error={errors.email} contents={'이메일을'} />

      <Controller
        control={control}
        name="pw"
        rules={{required: true}}
        defaultValue={''}
        render={({field}) => {
          return (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              className={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          );
        }}
      />

      <ErrorMsgWrapper error={errors.pw} contents={'이메일을'} />

      <ErrorMsg
        message={!isValidUser ? '유효하지 않은 회원 정보입니다.' : ''}
      />

      <Button title="로그인" onPress={handleSubmit(onSubmit)} />

      <View className={styles.textBtnContainer}>
        <TextButton
          title="비밀번호 찾기"
          className={styles.fintPwBtn}
          isBorder={true}
          onPress={onNavigateFindPw}
        />
        <TextButton
          title="회원가입"
          className={styles.signupBtn}
          onPress={onNavigateRegister}
        />
      </View>

      <Footer />
    </View>
  );
};

export default React.memo(Login);
