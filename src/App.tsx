import { makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  App: {
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
