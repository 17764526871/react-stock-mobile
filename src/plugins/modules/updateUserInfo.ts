import { CronJob } from 'cron';
import { authAtom, setAuth } from '@/stores';

/** 用户信息定时更新 */
export const registerUpdateUserInfo = () => {
  const job = CronJob.from({
    cronTime: '*/1 * * * *',
    onTick: async () => {
      if (!authAtom.val.userInfo) {
        return;
      }
      const userInfo = 'true';
      setAuth(() => {
        userInfo;
      });
    },
    runOnInit: true,
  });

  job.start();
};
