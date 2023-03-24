import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const CartState = atom({
	key: 'CartState',
	default: 0,
	effects_UNSTABLE: [persistAtom],
});
