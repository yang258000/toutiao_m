module.exports = {
  printWidth: 100, // 当行字符长度
  tabWidth: 2, // 指定每个缩进级别的空格数
  useTabs: false, // 使用制表符而不是空格缩进行
  semi: true, // 在语句的末尾加分号
  singleQuote: true, // 使用单引号而不是双引号
  quoteProps: 'as-needed', // 引用对象中的属性时更改
  jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号
  trailingComma: 'none', // 在多行逗号分隔的句法结构中尽可能打印尾随逗号
  bracketSpacing: true, // 在对象文字中的括号之间打印空格
  arrowParens: 'avoid',
  // 在唯一的箭头函数参数周围包含括号
  // "always"- 始终包括，例子：(x) => x
  // "avoid"- 尽可能省略括号例子：x => x
  rangeStart: 0, // 格式化文件的开头至结尾
  rangeEnd: Infinity, // 格式化文件的开头至结尾
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict', // 指定 HTML、Vue、Angular 和 Handlebars 的全局空格敏感性
  vueIndentScriptAndStyle: false, // 是否缩进 Vue 文件中的代码<script>和<style>标签
  endOfLine: 'auto',
  embeddedLanguageFormatting: 'auto' // 控制 Prettier 是否格式化文件中嵌入的引用代码
}
