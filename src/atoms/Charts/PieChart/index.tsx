import { Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pieChartOptions } from '../../../helpers/chartsCommonOptions';
import { generatePieChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart: React.FC<DataProps> = ({randomData}) => {
  const data = generatePieChartData(randomData)

  return (
  <Grid sm={12} md={8} lg={7}>
     <Pie options={pieChartOptions} data={data} />
  </Grid>
  );
}