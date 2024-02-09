import { OptionsType } from './types';

// 1、管理层交流会议；2、分析师交流会议、3、多轮对话
export const meetingTypeOptions: OptionsType<string> = [
  { label: '管理层路演和交流', value: '1' },
  { label: '分析师路演和交流', value: '2' },
  { label: '多轮QA交流', value: '3' },
];
