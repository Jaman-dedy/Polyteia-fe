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
import type { DataProps } from '../../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HorizontalBarChart: React.FC<DataProps> = ({numericData, randomData}) => {
  const data = generateHorizontalChartData(numericData, randomData)
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={horizontalBarChartOptions} data={data} />
  </Grid>
 
  );
}