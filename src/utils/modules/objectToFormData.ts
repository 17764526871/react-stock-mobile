/** 对象转FormData */
export function objectToFormData(obj: object, form?: FormData, namespace?: string): FormData {
  const formData = form || new FormData();

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      const formKey = namespace ? `${namespace}[${property}]` : property;

      if (obj[property] instanceof Date) {
        formData.append(formKey, obj[property].toISOString());
      } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        // 对于嵌套对象，递归调用函数
        objectToFormData(obj[property], formData, formKey);
      } else if (typeof obj[property] !== 'undefined') {
        // 对于文件或者基础类型，直接添加到 FormData
        formData.append(formKey, obj[property]);
      }
    }
  }

  return formData;
}
