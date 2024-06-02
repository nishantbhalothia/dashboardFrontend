import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// import 'react-pro-sidebar/dist/css/styles.css'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      onClick={() => setSelected(title)}
      style={{ color: colors.grey[100] }}
    >
      <Link to={to} style={{ textDecoration: "none" }}>
        <Typography style={{ color: colors.primary[100] }}>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box bgcolor={colors.primary[400]}  border='none' height='auto'>
      <ProSidebar collapsed={collapsed} backgroundColor={colors.primary[400]} style={{height:'auto'}}>
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: `${colors.primary[400]} !important`,
              },
              [`&:hover`]: {
                color: `#868dfb !important`,
                backgroundColor: "transparent !important",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box
              mt="25px"
              mb="25px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                  alt="user profile"
                  height="100px"
                  width="100px"
                  style={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    backgroundColor: "white",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="100"
                  sx={{ mt: "10px" }}
                >
                  Admin
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Vp Admin{" "}
                </Typography>
              </Box>
            </Box>
          )}

          {/*   Menu Items */}
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            m={"15px 0 5px 20px"}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Contact Info"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            m={"15px 0 5px 20px"}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

