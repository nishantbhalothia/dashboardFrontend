import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";

const Pie = ({ isDashboard = false }) => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dashboardbackend-3l6a.onrender.com/api/events");
      const eventData = await response.json();

      // Count occurrences of each category
      const categoryCounts = eventData.reduce((acc, event) => {
        const category = event.alert && event.alert.category; // Check if event.alert exists before accessing category
        if (category) {
          acc[category] = (acc[category] || 0) + 1;
        }
        return acc;
      }, {});

      // Convert category counts to Nivo pie chart data format
      const pieChartData = Object.keys(categoryCounts).map(category => ({
        id: category,
        label: category,
        value: categoryCounts[category]
      }));

      setData(pieChartData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ height: "400px" }}>
      {!isDashboard && (
        <Header
          title="PIE CHART"
          subtitle="Pie Chart of Event Categories"
        />
      )}
      <ResponsivePie
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100]
              }
            },
            legend: {
              text: {
                fill: colors.grey[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.grey[100]
              }
            }
          },
          legends: {
            text: {
              fill: colors.grey[100]
            }
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]]
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["brighter", 2]]
          // color: colors.grey[100]
        }}
        defs={[
          {
            id: "dots",
            // type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "Potentially Bad Traffic"
            },
            id: "dots"
          },
          {
            match: {
              id: "Misc Attack"
            },
            id: "dots"
          },
          {
            match: {
              id: "Not Suspicious Traffic"
            },
            id: "dots"
          },
          {
            match: {
              id: "Attempted Information Leak"
            },
            id: "dots"
          }
        ]}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 80,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000"
                      }
                    }
                  ]
                }
              ]
            : []
        }
      />
    </div>
  );
};

export default Pie;
