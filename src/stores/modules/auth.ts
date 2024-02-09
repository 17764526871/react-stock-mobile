import { atom, watch } from 'helux';
import { loginResponse } from 'intellistock-apis';

interface AuthType {
  userInfo?: loginResponse;
}

const localStorageItemName = 'AuthStore';

const [authAtom, setAuth] = atom<AuthType>(() => {
  const AuthStoreStr = window.localStorage.getItem(localStorageItemName);
  return AuthStoreStr ? JSON.parse(AuthStoreStr) : {};
});

watch(
  () => {
    window.localStorage.setItem(localStorageItemName, JSON.stringify(authAtom.val));
  },
  () => [authAtom],
);

export { authAtom, setAuth };
