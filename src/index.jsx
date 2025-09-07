import { createRoot } from 'react-dom/client'

const { log } = console

function main() {
  const root = createRoot(document.getElementById('root'))
  root.render(<h1>hello world</h1>)
  log('hello world!')
}

main()
