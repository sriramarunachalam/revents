import { toastr } from "react-redux-toastr";

export const updateProfile = (user) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...updatedUser} = user;
    try {
      await firebase.updateProfile(updatedUser);
      toastr.success("Success", "Your Profile has be updated");
    } catch (error) {
      console.log(error);
    }
  };
};
