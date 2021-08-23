
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import 'fontsource-roboto'

import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'

import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles"

import { green, red } from "@material-ui/core/colors"

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, red, gold)',
    border: 5,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createTheme({
  Typography: {
    h2: {
      fontSize: 36,
    }
  },
  pallete: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: red[500],
    }
  }
})

function StyledButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.change)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">:
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography vaiant="h6">
                Test NavBar
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <header className="App-header">
            {/* <Button
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => alert("clicked")}
          style={{
            fontSize: 16
          }}
          href="showsInURL"
          variant="contained"
          color="secondary">
          Hello World
        </Button> */}

            <Typography variant="h2">
              Welcome to MUI
            </Typography>

            <Typography variant="subtitle1" component="div">
              Secondary Typography Tag
            </Typography>

            <StyledButton />

            <Grid container spacing={5} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              type="date"
              label="Date"
            />

            <TextField
              variant="filled"
              type="email"
              color="secondary"
              label="email"
              placeholder="ABC@gmail.com"
            />

            <TextField
              variant="filled"
              type="time"
              color="secondary"
              label="The Time"
            />

            <CheckboxExample />

            <ButtonGroup variant="contained">
              <Button
                startIcon={<SaveIcon />}
                color="primary">
                Save
              </Button>

              <Button
                endIcon={<DeleteIcon />}
                color="secondary">
                Delete
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
