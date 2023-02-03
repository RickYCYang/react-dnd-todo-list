import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

import TaskBoard from './pages/TaskBoard/TaskBoard.component';

const tasks = [
  {
    title: 'todo',
    tasks: ['Read chapters for next class'],
  },
  {
    title: 'doing',
    tasks: ['Complete in-class activity', 'Brainsotrm project ideas'],
  },
  {
    title: 'done',
    tasks: [],
  },
];

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TaskBoard tasks={tasks} />);
