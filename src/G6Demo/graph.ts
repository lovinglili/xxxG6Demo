import { TreeGraph } from '@antv/g6';

export default class FlowGraph {
  public static graph: TreeGraph;

  public static init(data = {}, index = 0) {
    const container = document.getElementById(
      `container${index}`,
    ) as HTMLDivElement;
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;
    this.graph = new TreeGraph({
      container,
      width,
      height,
      linkCenter: true,
      modes: {
        default: [
          'drag-canvas',
          {
            type: 'zoom-canvas',
            maxZoom: 5,
          },
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 20;
        },
        getWidth: function getWidth() {
          return 30;
        },
        getVGap: function getVGap() {
          return 40;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });
    this.graph.data(data);
    this.setNodes();
    return this.graph;
  }
  private static setNodes() {
    const { graph } = this;
    graph.node(node => {
      let position = 'right';
      // 根据某些字段展示不同的图形
      const rotate = 0;
      // 每个图形文案的展示方向
      return {
        label: node.nodeName,
        labelCfg: {
          position,
          offset: 10,
          style: {
            rotate,
            textAlign: 'start',
          },
        },
      };
    });
  }
}
