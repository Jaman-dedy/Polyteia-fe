import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { verticalChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateVerticalChartData } from '../../../helpers/provider/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = generateVerticalChartData()

export const VerticalBarChart = ()  => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={verticalChartOptions} data={data} />
  </Grid>
 
  );
}