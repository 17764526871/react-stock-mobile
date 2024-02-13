import { atom, watch } from 'helux';

interface userData {
  userName?: '';
}

const localStorageItemName = 'UserStore';

const [userAtom, setUser] = atom<userData>(() => {
  const AuthStoreStr = window.localStorage.getItem(localStorageItemName);
  return AuthStoreStr ? JSON.parse(AuthStoreStr) : {};
});

watch(
  () => {
    window.localStorage.setItem(localStorageItemName, JSON.stringify(userAtom.val));
  },
  () => [userAtom],
);

export { userAtom, setUser };
