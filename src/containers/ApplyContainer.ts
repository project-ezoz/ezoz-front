import { connect } from "react-redux";
import { PostWrapper } from "../components/MapPost/PostWrapper";
import { postMarker } from "../store/mapActions";
import { AppDispatch } from "../store/store";
import { MarkerPostType } from "../types";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  postMarker: (newData: MarkerPostType) => dispatch(postMarker(newData)),
});
export const ApplyContainer = connect(null, mapDispatchToProps)(PostWrapper);