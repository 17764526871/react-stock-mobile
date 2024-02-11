import { IconNameType } from 'intellistock-icon';

/** 菜单树类型 */
export type MenuTreeType = (
  | {
      type: 'catalogue';
      children: MenuTreeType[];
    }
  | {
      type: 'menu';
      children?: FunctionType[];
      routePath: string;
    }
) & {
  name: string;
  icon: IconNameType;
  permissionKey: string;
  hideInMenu?: boolean;
};

/** 功能类型 */
interface FunctionType {
  type: 'function';
  name: string;
  icon: IconNameType;
  permissionKey: string;
}
