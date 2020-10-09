module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }, "ant-design-vue"], // `style: true` 会加载 less 文件
    ["import", { "libraryName": "mand-mobile", "libraryDirectory": "lib" }, "mand-mobile"]
  ]
}
