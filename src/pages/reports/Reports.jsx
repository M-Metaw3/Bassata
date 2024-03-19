
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
        <Box display={"flex"}  justifyContent={"space-between"}>


<Box  width={"30%"}>
  

<div class="w-full h-[100%] px-[3.328981723%] py-[6.188rem] bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex"><div class="flex-col justify-start items-center gap-[1.625rem] flex"><div class="flex-col justify-center items-center gap-[17px] flex"><div class="text-right text-black text-8xl font-normal font-['Inter']">24</div><div class="text-right text-neutral-700 text-2xl font-normal font-['Inter']">Request number</div></div><div class="inline-flex items-center justify-start w-full gap-2"><div class="text-black text-lg font-normal font-['Inter']">New 14 request this month</div><div class="relative w-6 h-6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trend-up-01"><path id="Icon" d="M2.40015 16.8002L7.77615 11.631L12.3841 16.0617L21.6001 7.2002M21.6001 7.2002H14.6881M21.6001 7.2002V13.8463" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></div></div></div></div>
</Box>




<Box w={"100%"}>
<Box >
    <div className="w-full h-[100%] p-[1.167rem] bg-white rounded-2xl flex-col justify-start items-start gap-[1.215625%] inline-flex">
      <div className="self-stretch justify-start items-center gap-[1.198267565%] inline-flex">
        <div className="inline-flex flex-col items-start justify-start gap-3 grow shrink basis-0">
          <div className="inline-flex items-center self-stretch justify-between">
            <div className="w-[151.69px] text-zinc-900 text-base font-normal font-['Inter'] leading-tight">Fund performance </div>
            <div></div>
          </div>
          <div className="w-[33.093358999%] justify-start items-center gap-[1.167rem] inline-flex">
            <div className="justify-start items-center gap-[1.167rem] flex">
              <div className="flex-col justify-start items-center gap-[7.78px] inline-flex">
                <div className="justify-start items-center gap-[7.78px] inline-flex">
                  <div className="w-[6.22px] h-[6.22px] relative">
                    <div className="w-[6.22px] h-[6.22px] left-0 top-0 absolute bg-neutral-700 rounded-full"></div>
                  </div>
                  <div className="text-neutral-700 text-sm font-medium font-['Inter'] leading-[9.33px]">Funds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {withCalender && (
          <div className="justify-start items-center gap-[30px] flex">
            <div className="w-[3.813rem] h-[0px] rotate-180 border-4 border-zinc-400"></div>
            <div className="text-zinc-400 text-xs font-normal font-['Inter'] leading-tight">Provisions Month</div>
          </div>
        )} */}
      </div>
      <Box  w={'70%'}   >
        <Ploty />
      </Box>
    </div>
    </Box>
</Box>




        </Box>












        <Box  display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
 

<div class="w-[30%] h-[100%] px-[3.328981723%] py-[6.188rem] bg-white rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex basis-1/4"><div class="flex-col justify-center items-center gap-[1.625rem] flex"><div class="flex-col justify-center items-center gap-[17px] flex"><div class="text-center text-black text-7xl font-normal font-['Inter']">{data?.data?.individual}</div><div class="text-center text-neutral-700 text-2xl font-normal font-['Inter']">Individual</div></div><div class="inline-flex items-center justify-center w-full gap-2"><div class="text-black text-md font-normal font-['Inter']">New e {data?.data?.individual} Individual</div></div></div></div>

   


<div class="w-[30%] h-[100%] px-[3.328981723%] py-[6.188rem] bg-white rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex basis-1/4"><div class="flex-col justify-center items-center gap-[1.625rem] flex"><div class="flex-col justify-center items-center gap-[17px] flex"><div class="text-center text-black text-7xl font-normal font-['Inter']">{data?.data?.cooperate}</div><div class="text-center text-neutral-700 text-2xl font-normal font-['Inter']">cooperate</div></div><div class="inline-flex items-center justify-center w-full gap-2"><div class="text-black text-md font-normal font-['Inter']">New {data?.data?.cooperate} joined cooperate</div></div></div></div>
      




<div class="w-[30%] h-[100%] px-[3.328981723%] py-[6.188rem] bg-white rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex basis-1/4"><div class="flex-col justify-center items-center gap-[1.625rem] flex"><div class="flex-col justify-center items-center gap-[17px] flex"><div class="text-center text-black text-7xl font-normal font-['Inter']">{data?.data?.branches}</div><div class="text-center text-neutral-700 text-2xl font-normal font-['Inter']">branches</div></div><div class="inline-flex items-center justify-center w-full gap-2"><div class="text-black text-md font-normal font-['Inter']">New e {data?.data?.branches} branches</div></div></div></div>
        </Box>


































        </Box>
    );
}

export default Reports;
