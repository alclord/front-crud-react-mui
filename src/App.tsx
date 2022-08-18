import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProviders, DrawerProviders } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProviders>
      <DrawerProviders>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProviders>
    </AppThemeProviders>
  );
};
