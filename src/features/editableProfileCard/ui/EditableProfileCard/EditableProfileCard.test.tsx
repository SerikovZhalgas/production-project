import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const mockData: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 456,
    currency: Currency.KZT,
    country: Country.Kazakhstan,
    city: 'Astana',
    username: 'admin123',
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: mockData,
                    form: mockData,
                },
                user: {
                    authData: {
                        id: '1',
                        username: 'admin123',
                    },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });

    test('режим рид онли должен переключиться', () => {
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('при отмене значения обнуляются', () => {
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', () => {
        const mockPutReq = jest.spyOn($api, 'put');
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
