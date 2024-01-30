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
import { stackedChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateStackChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const StackedBar: React.FC<DataProps> = ({numericData, randomData}) => {
  const data = generateStackChartData(numericData, randomData)
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={stackedChartOptions} data={data} />
  </Grid>
 
  );
}