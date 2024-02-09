import { setAuth } from '@/stores';
import { AuthApis } from 'intellistock-apis';

export class AuthActions {
  static async logout() {
    AuthApis.logout();
    setAuth(() => ({
      userInfo: undefined,
    }));
  }
}
