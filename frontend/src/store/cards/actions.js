export function fetchMonsters({ commit }) {
  this.$api.post(
    {
      query: `query monsters {
            monsters{
              name
            }
          }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(data => {
    console.log(data);
    commit("setMonsters", data);
  })
}
