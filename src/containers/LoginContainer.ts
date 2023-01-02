import { connect } from "react-redux";
import { CallbackGoogle } from "../components/Auth/CallbackGoogle";
import { userLogin } from "../store/authActions";
import { AppDispatch } from "../store/store";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (code: string) => {
    dispatch(userLogin(code)).then((res) => {
      if (res.type === "user/login/rejected") {
        alert("로그인에 실패했습니다. ");
      }
    });
  },
});

export const LoginContainer = connect(null, mapDispatchToProps)(CallbackGoogle);
