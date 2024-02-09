export const formatUrlToData = (txt: string) => {
  // 解析查询字符串
  const queryParams = new URLSearchParams(txt.substring(1));

  // 将查询参数转换为对象
  const keyValueObject = Object.fromEntries(queryParams.entries());

  return keyValueObject;
};
