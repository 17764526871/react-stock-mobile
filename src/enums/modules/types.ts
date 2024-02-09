export type OptionsValueType = string | number;

export type OptionsType<T extends OptionsValueType> = Array<{
  label: string;
  value: T;
}>;
