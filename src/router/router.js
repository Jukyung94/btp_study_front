import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import List from '../pages/List'
import Create from '../pages/Create'
import Read from '../pages/Read'
import ImageUploader from '../pages/ImageUploader';
import ImageViewer from '../pages/ImageViewer';

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
    },
    {
        path: "/images",
        element: <ImageViewer />
    },
    {
        path: "/uploadIMG",
        element: <ImageUploader />
    }
])

export default router;