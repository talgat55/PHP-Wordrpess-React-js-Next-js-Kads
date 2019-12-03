import  {combineReducers} from "redux";
import  modal from './modal';
import  modalSuccess from './modalSuccess';
import  overlayLayer from './overlayLayer';
import  modalService from './modalService';

const rootReducer = combineReducers({
    modal,
    modalSuccess,
    overlayLayer,
    modalService
});

export default  rootReducer;