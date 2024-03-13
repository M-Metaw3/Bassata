
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import Skeletoncomp from './../../components/Skeletoncomp';

const Reports = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['reportData'],
        queryFn: () =>
        GetDataProtected("report")
      })
      console.log(data)
    if(isPending) return <Skeletoncomp/>

    return (
        <div>
            Reports
        </div>
    );
}

export default Reports;
