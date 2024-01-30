import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { bubbleChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateBubbleChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const BubbleChart: React.FC<DataProps> = ({numericData, randomData}) => {
  const data = generateBubbleChartData(numericData, randomData)
  return (
    <Grid sm={10} md={10} lg={12}>
      <Bubble options={bubbleChartOptions} data={data} />
    </Grid>

  );
}