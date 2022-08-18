import { Typography } from "@mui/material"
import { Box } from "@mui/system"

interface ILayoutBaseDePagina {
    children: React.ReactNode
    titulo: string

}


export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({children,titulo})=>{

    return(
        
        
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box>
                <Typography>
                {titulo}
                </Typography>
            </Box>
            <Box>Barra de Ferramentas</Box>
            <Box>{children}</Box>
        </Box>
    )
}
