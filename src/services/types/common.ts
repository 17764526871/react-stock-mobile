/** 分页请求 */
export interface PageParams {
  page: number; // 分页
  pageSize: number; // 每页展示条目
}

/** 分页返回 */
export interface PageResponse<T> {
  page: number;
  pageSize: number;
  totalNum: number;
  pageTotal: number;
  data: T[];
}
