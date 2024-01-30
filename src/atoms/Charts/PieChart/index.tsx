import { Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pieChartOptions } from '../../../helpers/chartsCommonOptions';
import { generatePieChartData } from '../../../helpers/provider/chartDatasetsProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = generatePieChartData()

export const PieChart = () => {
  return (
  <Grid sm={12} md={8} lg={7}>
     <Pie options={pieChartOptions} data={data} />
  </Grid>
  );
}