import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { lineChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateLineChartData } from '../../../helpers/provider/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = generateLineChartData()

export const LineChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
    <Line options={lineChartOptions} data={data} />
  </Grid>
  
  );
}
