import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import {
    EditableProfileCard,
    getProfileError,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const userData = useSelector(getUserAuthData);
    const error = useSelector(getProfileError);

    if (!id) {
        return null;
    }

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames('', {}, [className])}
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {id !== userData?.id && !error && (
                    <ProfileRating profileId={id} />
                )}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
