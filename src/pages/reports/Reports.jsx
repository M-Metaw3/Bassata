
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import Skeletoncomp from './../../components/Skeletoncomp';
import { Box } from '@chakra-ui/react';
import { Dashboard } from '@material-ui/icons';
import Ploty from '../dashboard/Ploty';

const Reports = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['reportData'],
        queryFn: () =>
        GetDataProtected("report")
      })
      console.log(data)
    if(isPending) return <Skeletoncomp/>

    return (
      <Box>

Reports

        </Box>
    );
}

export default Reports;
