
import {TwoLevelPieChart} from './TwoLevelPieChart';
import { TwoSimplePieChart } from './TwoSimplePieChart/';
import { StraightAnglePieChart } from './StraightAnglePieChart';
import { StackedAreaChart } from './StackedAreaChart';
import { PieChartWithPaddingAngle } from './PieChartWithPaddingAngle';
import {MultipleYAxesScatterChart} from './MultipleYAxesScatterChart';
import {LineChartWithReferenceLines} from './LineChartWithReferenceLines';
import { LineChartConnectNulls } from './LineChartConnectNulls';
import { BasicSparkLine } from './BasicsSparkline';
import { BasicScatterChart } from './BasicsScatter';
import {BasicLineChart} from './BasicLineChart';
import {BasicBars} from './BasicBars';
import { AreaLineChart } from './AreaLineChart';
import { GraphType } from '../../types';


export const graphComponents: { [key in GraphType]: React.ComponentType<any> } = {
    [GraphType.TwoLevelPieChart]: TwoLevelPieChart,
    [GraphType.TwoSimplePieChart]: TwoSimplePieChart,
    [GraphType.StackedAreaChart]: StackedAreaChart,
    [GraphType.PieChartWithPaddingAngle]: PieChartWithPaddingAngle,
    [GraphType.MultipleYAxesScatterChart]: MultipleYAxesScatterChart,
    [GraphType.LineChartWithReferenceLines]: LineChartWithReferenceLines,
    [GraphType.LineChartConnectNulls]: LineChartConnectNulls,
    [GraphType.BasicSparkLine]: BasicSparkLine,
    [GraphType.BasicScatterChart]: BasicScatterChart,
    [GraphType.StraightAnglePieChart]: StraightAnglePieChart,
    [GraphType.BasicLineChart]: BasicLineChart,
    [GraphType.BasicBars]: BasicBars,
    [GraphType.AreaLineChart]: AreaLineChart,
  };
