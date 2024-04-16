import { JSX } from 'preact/jsx-runtime'
import styled from 'styled-components'

export function Table({ data }: { data: (string | JSX.Element)[][] }) {
  return (
    <Container>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  &,
  & tr,
  & td {
    border-collapse: collapse;
    padding: 0;
    margin: 0;
  }

  & td {
    padding-right: 10px;
  }
`
