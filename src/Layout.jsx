import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 2em;
`

export default function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
