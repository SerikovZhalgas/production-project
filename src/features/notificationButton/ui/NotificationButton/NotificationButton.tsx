import { memo, useState } from 'react';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDevice();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onClickClose = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
    );

    return (
        <div>
            {isMobile ? (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onClickClose}>
                        <NotificationList />
                    </Drawer>
                </>
            ) : (
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}
        </div>
    );
});
