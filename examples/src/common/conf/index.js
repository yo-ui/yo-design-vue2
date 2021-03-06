let api = {
  dev: require("../api/api.dev"),
  prod: require("../api/api.prod"),
  gitee: require("../api/api.gitee"),
  pc: require("../api/api.pc"),
  sandbox: require("../api/api.sandbox"),
  test: require("../api/api.test"),
  local: require("../api/api.local")
};

console.log(process.env.VUE_APP_API_HOST);
let apiConfig = loadApi(process.env.VUE_APP_API_HOST);

// let apiConfig=loadApi(process.env.API_HOST)

function loadApi(key) {
  if (!api[key]) {
    return api["prod"];
  }
  return api[key];
}

export default apiConfig;
