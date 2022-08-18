import { createContext, useCallback, useContext, useState } from 'react';



interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[]
  toggleDrawerOpen: () => void;
  setDrawerOptions: (options: IDrawerOptions[]) => void;
}
interface IDrawerProviderProps {
       children: React.ReactNode;
}
interface IDrawerOptions{
  path:string
  icon:string
  label:string
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

export const DrawerProviders: React.FC<IDrawerProviderProps> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions:IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions );
  }, []);

 
  return (
    <DrawerContext.Provider value={{ isDrawerOpen,drawerOptions,toggleDrawerOpen,setDrawerOptions:handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
}