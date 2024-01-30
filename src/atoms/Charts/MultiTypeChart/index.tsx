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
const data = generateMultiChartData()

export const MultiTypeChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Chart options={multilineChartOptions} type='bar' data={data} />
  </Grid>
 
  );
}