import React from 'react';

interface Props {
  name: string;
} // 아래 컴포넌트에 props로 받을 객체 타입 지정

const component: React.FC<Props> = (props) => {
  return <>{props.name}</>;
}; // props의 name 출력하기

export default component;
