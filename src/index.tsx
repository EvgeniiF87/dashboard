import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { Providers, routerApp } from "./app";
import { BeforLoading } from "./widgets";

import './app/styles/globals.scss';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <Suspense fallback={<BeforLoading />}>
      <RouterProvider router={routerApp} />
    </Suspense>
  </Providers>
);
