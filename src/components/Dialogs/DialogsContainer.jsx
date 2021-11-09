import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/auth-Redirect";
import { sendMessage, updateNewMessage } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

export default compose(connect(mapStateToProps, { sendMessage, updateNewMessage }), withAuthRedirect)(Dialogs);
