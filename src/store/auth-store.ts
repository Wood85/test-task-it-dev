import { create } from 'zustand';

type AuthStore = {
	access: string | undefined;
	refresh: string | undefined;
	setAccessToken: (token: string) => void;
	setRefreshToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
	  access: undefined,
		refresh: undefined,
		setAccessToken: (token: string) => set({ access: token }),
		setRefreshToken: (token: string) => set({ refresh: token }),
}));

export default useAuthStore;