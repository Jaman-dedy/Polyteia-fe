import { PieChart } from './PieChart';
import { HorizontalBarChart } from './HorizontalBarChart';
import { StackedBar } from './StackedBar';
import { AreaChart } from './AreaChart';
import { LineChart } from './LineChart';
import { DoughnutChart } from './DoughnutChart';
import { PolarAreaChart } from './PolarAreaChart';

import type { DataProps} from '../../types';
import { GraphType } from '../../types';
import { RadarChart } from './RadarChart';
import { ScatterChart } from './ScatterChart';
import { BubbleChart } from './BubbleChart';
import { MultiTypeChart } from './MultiTypeChart';
import { VerticalBarChart } from './VerticalBarChart';



export const graphComponents: { [key in GraphType]: React.FC<DataProps> } = {
    [GraphType.PieChart]: PieChart,
    [GraphType.DoughnutChart]: DoughnutChart,
    [GraphType.PolarAreaChart]: PolarAreaChart,
    [GraphType.RadarChart]: RadarChart,
    [GraphType.HorizontalBarChart]: HorizontalBarChart,
    [GraphType.StackedBar]: StackedBar,
    [GraphType.AreaChart]: AreaChart,
    [GraphType.LineChart]: LineChart,
    [GraphType.ScatterChart]: ScatterChart,
    [GraphType.BubbleChart]: BubbleChart,
    [GraphType.MultiTypeChart]: MultiTypeChart,
    [GraphType.VerticalBarChart]: VerticalBarChart,
  };
