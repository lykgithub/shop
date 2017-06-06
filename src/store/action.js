
export default {
  gotoCart ({ commit },data) {
    commit('gotoCart',data)
  },
  sendId ({ commit },data) {
    commit('sendId',data)
  },
  editAddress ({ commit },data) {
    commit('editAddress',data)
  },
    toOrder ({ commit },data) {
    commit('toOrder',data)
  }
}
