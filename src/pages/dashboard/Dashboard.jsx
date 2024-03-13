import React from 'react';
import PropTypes from 'prop-types';
import Ploty from './Ploty'; // Replace with the correct path to your Plotly component
import { Box } from '@chakra-ui/react';

const Dashboard = ({ withCalender }) => {
  return (
    <Box border={"1px solid red"} w={'20%'}>
    <div className="w-[71.803731859018%] h-[100%] p-[1.167rem] bg-white rounded-2xl flex-col justify-start items-start gap-[1.215625%] inline-flex">
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
      <Box border={"1px solid red"} w={'20%'} className="  shrink basis-0 justify-start items-start gap-3.5 inline-flex">
        <Ploty />
      </Box>
    </div>
    </Box>
  );
};



export default Dashboard;
