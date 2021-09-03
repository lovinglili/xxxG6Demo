## CHART

```tsx
import React from 'react';
import { Chart } from 'dumi-template';
const data = [
  {
    id: '0',
    children: [
      {
        id: '1',
        children: [
          {
            id: '2',
            children: [],
            nodeName: '[20001002323][哈哈哈嘿嘿]',
          },
        ],
        nodeName: '[2000234234][哈哈哈哈哈]-首页',
      },
    ],
    nodeName: '[2000023434001][哈哈哈哈]',
  },
];

const style = { width: 900, height: 300 };
const props = { data: data, type: 'aaa', style };

export default () => <Chart {...props} />;
```
