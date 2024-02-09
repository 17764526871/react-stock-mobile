import axios, { AxiosPromise } from 'axios';
import dayjs from 'dayjs';
import { CronJob } from 'cron';
import { Button, notification } from 'antd';
import { AlertTwoTone } from '@ant-design/icons';

interface BuildDataRespone {
  buildTIme: string;
}

function getBuildJson() {
  return axios({
    url: '/preBuildData.json',
    params: {
      random: Math.random(),
    },
  }) as AxiosPromise<BuildDataRespone>;
}

/** 系统版本更新通知 */
export const registerUpdateNotification = async () => {
  const respone = await getBuildJson();
  const newBuildTime = respone.data.buildTIme;
  window.localStorage.setItem('buildTime', newBuildTime);
  let isModalVisible = false;

  const job = new CronJob(
    '*/2 * * * *', // cronTime
    async () => {
      if (isModalVisible) {
        return;
      }
      const eachRespone = await getBuildJson();
      const eachNewBuildTime = eachRespone.data.buildTIme;
      const oldBuildTime = window.localStorage.getItem('buildTime');
      if (dayjs(eachNewBuildTime).isAfter(oldBuildTime)) {
        isModalVisible = true;
        // 弹窗
        notification.open({
          message: '系统已更新',
          description: '你确认要立刻前往新版本吗？',
          icon: <AlertTwoTone />,
          duration: 0,
          btn: (
            <Button type="default" size="small" onClick={() => window.location.reload()}>
              前往新版
            </Button>
          ),
          onClose: () => {
            isModalVisible = false;
          },
        });
      }
    },
  );

  job.start();
};
