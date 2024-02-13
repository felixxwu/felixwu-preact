import { JSX, h } from 'preact'

export function styled<T extends keyof HTMLElementTagNameMap>(tag: T, className?: string) {
  return (props: HTMLElementTagNameMap[T] | { [key: string]: any }): JSX.Element => {
    const classNames = `${className ?? ''} ${props.className ?? ''}`
    return h(
      // @ts-ignore
      tag,
      {
        ...(props ?? {}),
        ...(className || props.className ? { className: classNames } : {}),
      },
      ...(Array.isArray(props.children) ? props.children ?? [] : [props.children])
    )
  }
}

export function styledSVG<T extends keyof SVGElementTagNameMap>(tag: T, className?: string) {
  return (props: SVGElementTagNameMap[T] | { [key: string]: any }): JSX.Element => {
    const classNames = `${className ?? ''} ${props.className ?? ''}`
    return h(
      // @ts-ignore
      tag,
      {
        ...(props ?? {}),
        ...(className || props.className ? { className: classNames } : {}),
      },
      ...(Array.isArray(props.children) ? props.children ?? [] : [props.children])
    )
  }
}
