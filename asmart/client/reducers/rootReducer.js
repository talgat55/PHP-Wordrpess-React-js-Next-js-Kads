import  {combineReducers} from "redux";
import  modal from './modal';
import  modalSuccess from './modalSuccess';
import  overlayLayer from './overlayLayer';

const rootReducer = combineReducers({
    modal,
    modalSuccess,
    overlayLayer
});

export default  rootReducer;