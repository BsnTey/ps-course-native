import { User } from './user.model';
import { atom } from 'jotai/vanilla/atom';

export const profileAtom = atom<UserState>({
	profile: {
		id: 1,
		name: 'anton',
	},
	isLoading: false,
	error: null,
});

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}
