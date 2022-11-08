import * as React from 'react';
import {FieldError} from 'react-hook-form';
import {StyleSheet, Text} from 'react-native';
import {sliceLastStr} from '../../../shared/FormUtils';
import styles from './ErrorMsg.module.scss';

interface ErrorMsgProps {
  type?: string;
  message?: string;
  contents?: string;
}

interface ErrorMsgWrapper {
  error: FieldError | undefined;
  contents?: string;
}

export enum FormErrorType {
  VALIDATE = 'validate',
  REQUIRED = 'required',
}

export const ErrorMsgWrapper = ({error, ...props}: ErrorMsgWrapper) => {
  return (
    <>
      {error && (
        <ErrorMsg type={error.type} message={error.message} {...props} />
      )}
    </>
  );
};

const ErrorMsg = ({type, message = '', contents}: ErrorMsgProps) => {
  const errorMessage = React.useMemo(() => {
    if (!!message) {
      return message;
    }

    switch (type) {
      case FormErrorType.REQUIRED:
        return `${contents} 입력해주세요.`;

      case FormErrorType.VALIDATE:
        return `${sliceLastStr(contents || '')} 형식이 올바르지 않습니다.`;

      default:
        return '';
    }
  }, [type, contents, message]);

  return <Text className={styles.validate}>{errorMessage}</Text>;
};

export default React.memo(ErrorMsg);
