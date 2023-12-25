import React from 'react';

interface IProductButtonProps {
  caption: string;
  handleClick: () => void;
}

export default function ProductButton(props: IProductButtonProps) {
  return (
    <button onClick={props.handleClick}>{props.caption}</button>
  );
}