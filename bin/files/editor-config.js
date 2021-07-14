const editorConfig = `# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = tab
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
`

module.exports = editorConfig;