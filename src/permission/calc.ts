import { MenuTreeType } from './menuType';

/** 计算权限字符串是否包含当前权限 */
export const calcHasPermission = (permissionKey: string, permissionKeys: string[]) =>
  permissionKeys.includes('*') || permissionKeys.includes(permissionKey);

/** 计算当前权限拥有的菜单树 */
export const calcUserHasMenuTree = (
  originalMenuTree: MenuTreeType[],
  permissionKeys: string[],
  noFilterHide?: boolean,
) => {
  if (permissionKeys.includes('*')) return originalMenuTree;

  const filterMenuTree = (menuTree: MenuTreeType[]): MenuTreeType[] =>
    menuTree
      .filter((item) => permissionKeys.includes(item.permissionKey))
      .filter((item) => noFilterHide || !item.hideInMenu)
      .map((item) => {
        if (item.type === 'catalogue') item.children = filterMenuTree(item.children);
        if (item.type === 'menu' && item.children)
          item.children = item.children.filter((childrenItem) =>
            permissionKeys.includes(childrenItem.permissionKey),
          );
        return item;
      });

  return filterMenuTree(originalMenuTree);
};
