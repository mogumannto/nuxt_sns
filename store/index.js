export const state = () => ({
  list: [
    { user: 'mogumannto', content: 'hogehoge', created: '2019-03-31 15:30' }
  ]
})

export const mutations = {
  insert (state, obj) {
    const d = new Date()
    const fmt = d.getFullYear() + '-' +
      ('00' + (d.getMonth() + 1)).slice(-2) + '-' +
      ('00' + d.getDate()).slice(-2) + ' ' +
      ('00' + d.getHours()).slice(-2) + ':' +
      ('00' + d.getMinutes()).slice(-2)
    state.list.unshift({
      user: obj.user,
      content: obj.content,
      created: fmt
    })
  }
}
