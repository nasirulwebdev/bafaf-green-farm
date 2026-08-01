import React from "react";
import AppRoutes from "@/Routes/Routes";
import { AppProvider } from "./Context/AppContext";
import { AuthProvider } from "./Context/AuthContext";



function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
