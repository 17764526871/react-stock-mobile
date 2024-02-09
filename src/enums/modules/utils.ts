import { OptionsType, OptionsValueType } from './types';

export const getOptionLabelByValue = <T extends OptionsValueType>(
  options: OptionsType<T>,
  value: T,
) => options.find((item) => item.value === value)?.label || '未知选项';
