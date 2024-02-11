import { request } from '../request';

export class commonApis {
  static getSummaryData(data?: any) {
    return request<any>({
      url: '/api/viewInterResearch/',
      method: 'get',
      data,
    });
  }

  // 年度报告
  static getFinancialReportData(data: any) {
    return request({
      url: '/api/financialReportApi/',
      method: 'post',
      data,
    });
  }

  // 股价日线
  static stockDaysChatsData(data: any) {
    return request({
      url: '/api/usStockPriceApi/',
      method: 'post',
      data,
    });
  }

  // 刷新缓存
  static handleRefreshCacheBtn(data: any) {
    return request({
      url: '/api/refreshCacheBtn/',
      method: 'post',
      data,
    });
  }
}
