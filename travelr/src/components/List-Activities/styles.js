import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', marginTop: '-20px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  searchfields: {
    display: 'flex', justifyContent: 'center', marginBottom: '2.88rem', marginTop: '5px'
  },
  searchfieldsInput: {
    width: '21rem', padding: '.66rem 1rem', marginLeft: '1rem', border: '1px solid #fff',borderRadius: '4px',
    borderColor: 'inherit', marginTop:'10px', fontSize: '.77rem', fontWeight: '500',
  },

}));