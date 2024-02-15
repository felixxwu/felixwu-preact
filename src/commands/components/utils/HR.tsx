import { css } from '@emotion/css'

export function HR() {
  return (
    <hr
      className={css`
        border: 0;
        border-top: 1px solid #ffffff7a;
        margin: 20px 0;
      `}
    />
  )
}
