// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             Dashboard
//         </div>
//     );
// }

// export default Dashboard;


import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist-min';
import { Box } from '@chakra-ui/react';
const Ploty = () => {
  const plotRef = useRef(null);

  useEffect(() => {
    const fetchDataAndPlot = async () => {
      try {
        const PlotlyModule = await import('plotly.js-dist-min');
        const plotElement = plotRef
.current;

        const data = [
          {
            mode: 'lines',
            x: ['1K', '2K', '3K', '4K', '5K', '6K', '7K', '8K', '9K', '10K', '11K', '12K'],
            y: [2, 4, 7, 6, 9, 10, 12, 17, 19, 22, 23, 25],
            line: { color: 'red', width: 2, shape: 'spline' },
          },
          {
            mode: 'lines',
            x: ['1K', '2K', '3K', '4K', '5K', '6K', '7K', '8K', '9K', '10K', '11K', '12K'],
            y: [1, 3, 5, 7, 9, 11, 13, 15, 18, 20, 21, 23],
            line: { color: 'black', width: 2, shape: 'spline' },
          },
        ];

        const layout = {
          title: '',
          margin: { t: 0 },
          showlegend: false,
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          xaxis: {
            showgrid: false,
            linecolor: 'transparent',
            showline: false,
          },
          yaxis: {
            showgrid: false,
            linecolor: 'transparent',
            showline: false,
          },
          margin: {
            l: 20,
            r: 20,
            t: 20,
            b: 20,
          },
        };

        const config = {
          toImageButtonOptions: {
            format: 'svg',
            filename: 'chart',
            height: 500,
            width: 700,
            scale: 1,
          },
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: [
            'toImage',
            'zoom2d',
            'pan2d',
            'select2d',
            'lasso2d',
            'zoomIn2d',
            'zoomOut2d',
            'autoScale2d',
            'resetScale2d',
          ], // Remove specific mode bar buttons
        };

        PlotlyModule.newPlot(plotElement, data, layout, config);
      } catch (error) {
        console.error('Error loading Plotly:', error);
      }
    };

    fetchDataAndPlot();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Box m={"20px"} ref={plotRef} id="plot" className="w-full">
      {/* Content goes here */}
    </Box>
  );
};

export default Ploty;
