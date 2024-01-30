import { Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateDoughnutChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart: React.FC<DataProps> = ({numericData}) => {

  const data = generateDoughnutChartData(numericData)
  return (
  <Grid sm={12} md={8} lg={7}>
    <Doughnut options={doughnutChartOptions} data={data} />
  </Grid>
  
  );
}
