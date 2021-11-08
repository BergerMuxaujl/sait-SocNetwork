import { connect } from "react-redux";
import { sendMessage, updateNewMessage } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;
