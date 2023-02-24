import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { PostWrapper } from "../components/MapPost/PostWrapper";
import { postMarker } from "../store/mapActions";
import { AppDispatch } from "../store/store";
import { MarkerPostType } from "../types";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  postMarker: (newData: MarkerPostType) =>
    dispatch(postMarker(newData)).then((res) => {
      if (res.type === "marker/post/fulfilled") {
        alert("마커 등록에 성공하였습니다.");
        window.location.href = "/map";
      } else {
        alert("마커 등록에 실패했습니다.");
      }
    }),
});
export const ApplyContainer = connect(null, mapDispatchToProps)(PostWrapper);
