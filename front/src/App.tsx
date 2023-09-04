import './App.css'
import { Container, Button } from '@mui/material'
import { NavBar } from './common/NavBar'

function App() {

  return( 
    <div>
      <NavBar/>
      <Container sx={{mt: 9}} maxWidth="xl">
      <Button variant='contained'>Hola mundo</Button>
    </Container>
    </div>
    
  )
}

export default App
