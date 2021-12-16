import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode() {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = (e) => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };

    onChangeStatus = (e) => {
        this.setState({ status: e.currentTarget.value });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={s.statusBox}>
                {!this.state.editMode && (
                    <span onDoubleClick={this.activateEditMode.bind(this)} className={s.statusSpan}>
                        {this.props.status}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        onChange={this.onChangeStatus.bind(this)}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        className={s.statusInput}
                        type="text"
                        value={this.state.status}
                    />
                )}
            </div>
        );
    }
}

export default ProfileStatus;
