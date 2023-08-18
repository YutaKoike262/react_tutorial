import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const resetButton = () => {
    setNum(0);
  };
  // state変数名, 変更時の関数を分割代入 useStateの引数で初期値を代入
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const flagChange = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // useEffectの第二引数に配列をとる。
  // Note: 配列をからにすると画面表示時のみ実行する(angularの onInit)
  // Note2:配列内に変数を設定するとその変数が変化したときのみ実行できる
  useEffect(() => {
    if (!(num % 3)) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

  return (
    <>
      <ColorfulMessage color="red">Hello World</ColorfulMessage>
      <ColorfulMessage color="blue">メッセージ変える</ColorfulMessage>
      <ColorfulMessage color="black">メッセージを変える</ColorfulMessage>
      <ColorfulMessage color="black">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <button onClick={resetButton}>リセット</button>
      <p>{num}</p>
      <button onClick={flagChange}>on/off</button>
      {faceShowFlag && <p>^-^</p>}
    </>
  );
};

export default App;
