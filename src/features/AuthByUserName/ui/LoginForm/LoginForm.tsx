import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../modal/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'rejected') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                text={t('Вы ввели неверный логин или пароль')}
                                variant="error"
                            />
                        )}
                        <Input
                            autoFocus
                            type="text"
                            onChange={onChangeUsername}
                            className={cls.input}
                            placeholder={t('Введите username')}
                            value={username}
                        />
                        <Input
                            type="text"
                            className={cls.input}
                            onChange={onChangePassword}
                            placeholder={t('Введите пароль')}
                            value={password}
                        />
                        <Button
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated
                                text={t('Вы ввели неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autoFocus
                            type="text"
                            onChange={onChangeUsername}
                            className={cls.input}
                            placeholder={t('Введите username')}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            onChange={onChangePassword}
                            placeholder={t('Введите пароль')}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
