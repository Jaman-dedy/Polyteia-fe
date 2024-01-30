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
import { generateLineAreaChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

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

export const AreaChart: React.FC<DataProps> = ({randomData}) => {
  const data = generateLineAreaChartData(randomData)
  return (
    <Grid sm={10} md={10} lg={12}>
      <Line options={lineChartOptions} data={data} />
    </Grid>

  );
}