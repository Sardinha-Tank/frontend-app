import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    margin: `${theme.spacing(0)} auto`
  },
  loginBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1
  },
  header: {
    textAlign: 'center',
    background: '#2832b1',
    color: '#fff'
  },
  card: {
    marginTop: theme.spacing(10)
  }
})
);