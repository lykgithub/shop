
export default {
  gotoCart (state,data) {
    state.picked=data
  },
  sendId (state,data) {
    state.Id=data
  },
  editAddress(state,data) {
    state.eidtAddress=data
  },
    toOrder (state,data) {
    state.params=data
  }
}
