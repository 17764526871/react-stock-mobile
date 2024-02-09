export const downloadFileByBlob = (blob: Blob, fileName: string) => {
  const blobURl = URL.createObjectURL(blob);
  // 创建一个隐藏的 <a> 元素
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = blobURl;
  a.download = fileName;

  // 将 <a> 元素添加到 DOM 中
  document.body.appendChild(a);

  // 模拟点击下载链接
  a.click();

  // 删除 <a> 元素
  document.body.removeChild(a);
  URL.revokeObjectURL(blobURl);
};
