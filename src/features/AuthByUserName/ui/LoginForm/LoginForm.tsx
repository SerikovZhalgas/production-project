import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions } from '../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../modal/selectors/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        className,
    } = props;
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
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
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
