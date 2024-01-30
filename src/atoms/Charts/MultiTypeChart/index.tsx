import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { multilineChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateMultiChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const MultiTypeChart: React.FC<DataProps> = ({numericData, randomData}) => {
  const data = generateMultiChartData(numericData, randomData)
  return (
  <Grid sm={10} md={10} lg={12}>
     <Chart options={multilineChartOptions} type='bar' data={data} />
  </Grid>
 
  );
}