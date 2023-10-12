import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    DynamicModuleLoaderProps,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoaderProps/DynamicModuleLoaderProps';
import { profileReducer } from 'entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <DynamicModuleLoaderProps reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoaderProps>
    );
});

export default ProfilePage;
