import { Grid } from '@mui/material';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { radarChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateRadarChartData } from '../../../helpers/chartDatasetsProvider';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = generateRadarChartData()

export const RadarChart = () => {
  return (
  <Grid sm={12} md={8} lg={7}>
     <Radar options={radarChartOptions} data={data} />
  </Grid>
 
  );
}