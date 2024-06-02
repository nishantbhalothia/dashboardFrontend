import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Header from './Header';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const EventsChart = ({ isDashboard = false }) => {
    const [data, setData] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dashboardbackend-3l6a.onrender.com/api/events');
            const eventData = await response.json();
            // Assuming eventData is an array of alert objects
            setData(eventData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ height: '400px' }}>
          {isDashboard || (
            <Header
              title="BAR CHART"
              subtitle="Bar Chart of Event Categories"
            />)
          }

            <ResponsiveBar
                data={data}
                theme={{
                  // added
                  axis: {
                    domain: {
                      line: {
                        stroke: colors.grey[100],
                      },
                    },
                    legend: {
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                    ticks: {
                      line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                      },
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                  },
                  legends: {
                    text: {
                      fill: colors.grey[100],
                    },
                  },
                }}
                keys={['dest_port']}
                indexBy="_id"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.5}
                colors={{ scheme: 'nivo' }}
                axisBottom={{
                    tickRotation: -45
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Port Number',
                    legendPosition: 'middle',
                    legendOffset: -50
                }}
                labelSkipWidth={12}
                labelSkipHeight={20}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
};

export default EventsChart;
