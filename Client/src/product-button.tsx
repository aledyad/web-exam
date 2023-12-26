import React from 'react';

/** Параметры кнопки товара. */
interface IProductButtonProps {
  /** Заголовок. */
  caption: string;
  /** обработчик нажатия. */
  handleClick: () => void;
}

/**
 * Кнопка товара.
 * @param props Параметры.
 */
export default function ProductButton(props: IProductButtonProps) {
  return (
    <button onClick={props.handleClick}>{props.caption}</button>
  );
}