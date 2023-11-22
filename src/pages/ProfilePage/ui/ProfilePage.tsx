import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { getUserAuthData } from '@/entities/User';
import { getProfileError } from '@/features/editableProfileCard/model/selectors/getProfileError/getProfileError';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const userData = useSelector(getUserAuthData);
    const error = useSelector(getProfileError);

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {id !== userData?.id && !error && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
