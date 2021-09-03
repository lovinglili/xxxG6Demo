import React, { useEffect, useState } from 'react';
import graphChart from './graph';
import styles from './index.less';

/**
 * 数据 data;
 * 类型 type，三种
 */
export interface chartProps {
  data: any[];
  type: string;
  style?: React.CSSProperties;
}

const Chart: React.FC<chartProps> = props => {
  const { data, type, style } = props;
  // 先处理一遍字段
  const [currentGraph, setGraph] = useState<any>([]);
  useEffect(() => {
    // 初始化画布,若画布存在则更新数据
    let graphStore = [];
    if (currentGraph.length) {
      currentGraph.forEach(item => {
        item.destroy();
      });
      setGraph([]);
      graphStore = [];
    }
    data.forEach((item, index) => {
      const graph = graphChart.init(item, index);
      graph.render();
      graph.fitView(0);
      graphStore.push(graph);
    });
    setGraph([...graphStore]);
  }, [type]);
  return (
    <div style={style} className={styles.containerWrap}>
      {data.map((_, index) => (
        <div id={`container${index}`} key={index} />
      ))}
    </div>
  );
};

export default Chart;
