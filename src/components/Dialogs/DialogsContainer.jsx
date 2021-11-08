import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/auth-Redirect";
import { sendMessage, updateNewMessage } from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

let withAuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessage })(withAuthRedirectComponent);

export default DialogsContainer;
