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
import { horizontalBarChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateHorizontalChartData } from '../../../helpers/provider/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = generateHorizontalChartData()

export const HorizontalBarChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={horizontalBarChartOptions} data={data} />
  </Grid>
 
  );
}