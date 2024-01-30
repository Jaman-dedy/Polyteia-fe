import { Grid } from '@mui/material';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { polarChartOptions } from '../../../helpers/chartsCommonOptions';
import { generatePolarChartData } from '../../../helpers/chartDatasetsProvider';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const data = generatePolarChartData()

export const PolarAreaChart = () => {
  return (
  <Grid sm={12} md={8} lg={7}>
    <PolarArea options={polarChartOptions} data={data} />
  </Grid>
  );
}