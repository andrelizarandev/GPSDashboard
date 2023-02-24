// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadScript } from '@react-google-maps/api';
import { QueryClient, QueryClientProvider } from 'react-query';

// Contexts
import MainContext from './contexts';

// Dialogs
import MessageDialog from './dialogs/message-dialog';
import ConfirmDialog from './dialogs/confirm-dialog';

// Router
import Router from './router';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY as string} libraries={["places"]}>
      <QueryClientProvider client={queryClient}>
        <MainContext>

          <Router />
          <MessageDialog/>
          <ConfirmDialog/>

        </MainContext>
      </QueryClientProvider>
    </LoadScript>
  </React.StrictMode>,
)

