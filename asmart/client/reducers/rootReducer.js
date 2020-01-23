import  {combineReducers} from "redux";
import  modal from './modal';
import  modalSuccess from './modalSuccess';
import  overlayLayer from './overlayLayer';
import  modalService from './modalService';
import  activeService from './activeService';
import  activeServiceTab from './activeServiceTab';

const rootReducer = combineReducers({
    modal,
    modalSuccess,
    overlayLayer,
    modalService,
    activeService,
    activeServiceTab
});

export default  rootReducer;