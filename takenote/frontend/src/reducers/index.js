import { combineReducers} from 'redux';
import notes from './notes';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  notes,
  errors,
  messages
});
