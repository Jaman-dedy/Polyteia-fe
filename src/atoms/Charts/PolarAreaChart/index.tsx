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
import { generatePolarChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart: React.FC<DataProps> = ({randomData}) => {
  const data = generatePolarChartData(randomData)
  return (
  <Grid sm={12} md={8} lg={7}>
    <PolarArea options={polarChartOptions} data={data} />
  </Grid>
  );
}