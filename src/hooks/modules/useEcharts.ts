import * as echarts from 'echarts';
import { debounce } from 'lodash';
import { useEffect, useRef } from 'react';

export const useEcharts = (initOption: echarts.EChartsOption) => {
  /** 用于绑定echarts的dom */
  const echartsRef = useRef<HTMLDivElement>(null);
  /** echarts实例 */
  const echartsInstance = useRef<echarts.ECharts | null>(null);

  /** 设置配置 */
  const setOption = () => {
    if (!echartsInstance.current && echartsRef.current) {
      echartsInstance.current = echarts.init(echartsRef.current);
    }
    echartsInstance.current?.setOption(initOption);
  };

  const resizeCharts = debounce(() => {
    echartsInstance.current?.resize();
  });

  // 首次加载设置配置
  useEffect(() => {
    setOption();
    window.addEventListener('resize', resizeCharts);

    return () => {
      echartsInstance.current?.dispose();
      window.removeEventListener('resize', resizeCharts);
    };
  }, []);

  return {
    echartsRef,
    echartsInstance,
    setOption,
  };
};
