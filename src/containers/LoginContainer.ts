import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CallbackGoogle } from "../components/Auth/CallbackGoogle";
import { userLogin } from "../store/authActions";
import { AppDispatch } from "../store/store";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (code: string) => dispatch(userLogin(code)),
});

export const LoginContainer = connect(null, mapDispatchToProps)(CallbackGoogle);
