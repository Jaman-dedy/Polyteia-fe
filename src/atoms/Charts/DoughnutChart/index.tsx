import { Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateDoughnutChartData } from '../../../helpers/provider/chartDatasetsProvider';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = generateDoughnutChartData()

export const DoughnutChart = () => {
  return (
  <Grid sm={12} md={8} lg={7}>
    <Doughnut options={doughnutChartOptions} data={data} />
  </Grid>
  
  );
}
