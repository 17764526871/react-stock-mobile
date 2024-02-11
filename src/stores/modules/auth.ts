import { atom, watch } from 'helux';

interface AuthType {
  userInfo?: '';
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
