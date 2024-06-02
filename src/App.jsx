import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Bar from './Components/Bar';
import Line from './Components/Line';
import Pie from './Components/Pie';
import Team from './Components/Team';
import Contacts from './Components/Contacts';

function App() {
  const { colorMode, theme } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className='app'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/line' element={<Line />} />
                <Route path='/pie' element={ <Pie />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<h1>Not Found</h1>} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
