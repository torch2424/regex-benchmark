const fs = require('fs')
const {fa} = require('regexp-tree');

if (process.argv.length !== 3) {
  console.log('Usage: node benchmark.js <filename>')
  process.exit(1)
}

function measure(data, pattern) {
  const start = process.hrtime();

  console.log(pattern)
  const matches = fa.test(`/${pattern}/`, data);
  const count = 0

  const end = process.hrtime(start)

  console.log((end[0] * 1e9 + end[1]) / 1e6 + ' - ' + count)
}

const data = fs.readFileSync(process.argv[2], 'utf8')

measure(data, 'ab|c*')

// Email
// measure(data, '[\\w.+-]+@[\\w.-]+\\.[\\w.-]+')

// URI
// measure(data, '[\\w]+:\\/\\/[^\\/\\s?#]+[^\\s?#]+(?:\\?[^\\s#]*)?(?:#[^\\s]*)?')

// IP
// measure(data, '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9])')
