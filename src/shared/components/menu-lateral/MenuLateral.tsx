import {Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system";
import {useTheme} from "@mui/material"
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


interface IMenuLateral{
    children: React.ReactNode;
}
interface IListItemLinkProps{
 label: string;
 icon: string;
 to: string;
 onClick:( () => void) | undefined;
}


const ListItemLink : React.FC<IListItemLinkProps>=({to,icon,label,onClick})=>{
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({path:resolvedPath.pathname,end:false})
  const handleClick= ()=>{
  navigate(to)
    onClick?.()
  
}
  return(
    <ListItemButton selected={!!match} onClick={handleClick}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
  )
}

export const MenuLateral:React.FC <IMenuLateral>=({children}) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen,toggleDrawerOpen,drawerOptions} =useDrawerContext();
    
    return(
        <>
        <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
            <Box width={theme.spacing(28)} height="100%" display='flex' flexDirection='column'>
                
                <Box width="100%" height={theme.spacing(18)} display='flex' alignItems='center' justifyContent='center'>
                <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="localhost\Desktop\newlogo.png"
            />
          </Box>
            
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption =>(
                <ListItemLink
                key={drawerOption.path} 
                icon={drawerOption.icon}
                label= {drawerOption.label}
                to={drawerOption.path} 
                onClick={smDown? toggleDrawerOpen : undefined}
                ></ListItemLink>
              ))}
              

              
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};