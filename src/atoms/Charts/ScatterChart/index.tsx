import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { Grid } from '@mui/material';
import { scatterChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateScatterChartData } from '../../../helpers/provider/chartDatasetsProvider';
import type { DataProps } from '../../../types';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


export const ScatterChart: React.FC<DataProps> = ({randomData})  => {
  const data = generateScatterChartData(randomData)
  return (
  <Grid sm={10} md={10} lg={12}>
     <Scatter options={scatterChartOptions} data={data} />
  </Grid>
 
  );
}