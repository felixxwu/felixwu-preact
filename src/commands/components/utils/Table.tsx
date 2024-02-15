import { JSX } from 'preact/jsx-runtime'
import { styled } from '../../../utils/StyledComponent'
import { css } from '@emotion/css'

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

const Container = styled(
  'table',
  css`
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
)
