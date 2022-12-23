import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import List from '../pages/List'
import Create from '../pages/Create'
import Read from '../pages/Read'

const router = createBrowserRouter([
    {
        path: "/",
        element: <List />
    },
    {
        path: "/create",
        element: <Create />
    },
    {
        path: "/read",
        element: <Read />
    }
])

export default router;