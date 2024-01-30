import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { lineChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateLineAreaChartData } from '../../../helpers/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = generateLineAreaChartData()

export const AreaChart = () => {
  return (
    <Grid sm={10} md={10} lg={12}>
      <Line options={lineChartOptions} data={data} />
    </Grid>

  );
}