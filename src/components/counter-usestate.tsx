"use client";

import { useCounter } from "@/hooks/use-counter";
import { FormEventHandler, type FC, useState, ChangeEventHandler } from "react";

type Props = {
  initialCount?: number;
};

export const Counter: FC<Props> = (props) => {
  // 作成したカスタムフックスの useCounter でカウンターの状態を管理
  const [count, { add, subtract, set }] = useCounter({
    initialCount: props.initialCount,
  });
  // リセット用の値を useState で管理
  const [resetValue, setResetValue] = useState("");

  // TextField の値が変更された時に呼ばれる関数。常に状態を更新
  const handleResetValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setResetValue(event.target.value);
  };

  // 「入力値で設定」ボタンをクリック時に呼ばれる関数
  // 入力された値が数値でない場合、エラーメッセージを表示します。
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const resetValueNumber = Number(resetValue);
    if (isNaN(resetValueNumber) || resetValue.trim() === "") {
      alert("値が不正です。数値を入力してください。");
      return;
    }
    set(resetValueNumber);
  };

  return (
    <div className="px-4 py-3 border-2 flex flex-col space-y-4 mx-2 mt-2">
      <h1 className="text-lg font-bold text-slate-800">
        useState を利用した Counter
      </h1>
      <div>
        <span className="px-2 py-1 bg-blue-100 text-sm rounded-md text-slate-700">
          count = {count}
        </span>
      </div>
      <div className="flex flex-col space-y-2 bg-slate-100 p-2">
        <span className="text-sm bg-slate-200 px-2 py-1 text-slate-800">
          初期値
        </span>
        <div className="flex flex-row space-x-2">
          <span className="px-2 py-1 bg-blue-100 text-sm rounded-md text-slate-700">
            {props.initialCount || 0}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-slate-100 p-2">
        <span className="text-sm bg-slate-200 px-2 py-1 text-slate-800">
          減らす
        </span>
        <div className="flex flex-row space-x-2">
          <button
            onClick={() => {
              subtract(2);
            }}
            className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
          >
            - 2
          </button>
          <button
            onClick={() => {
              subtract(1);
            }}
            className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
          >
            - 1
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-slate-100 p-2">
        <span className="text-sm bg-slate-200 px-2 py-1 text-slate-800">
          増やす
        </span>
        <div className="flex flex-row space-x-2">
          <button
            onClick={() => {
              add(1);
            }}
            className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
          >
            + 1
          </button>
          <button
            onClick={() => {
              add(2);
            }}
            className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white"
          >
            + 2
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-slate-100 p-2">
        <span className="text-sm bg-slate-200 px-2 py-1 text-slate-800">
          値を設定
        </span>
        <button
          onClick={() => {
            set(0);
          }}
          className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white w-28"
        >
          0 にリセット
        </button>
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 text-sm pl-1 w-20"
            value={resetValue}
            onChange={handleResetValueChange}
          ></input>
          <button
            type="submit"
            className="px-2 py-1 bg-slate-800 border-slate-800 rounded-md text-sm shadow-sm hover:bg-slate-700 text-white ml-2"
          >
            入力値で設定
          </button>
        </form>
      </div>
    </div>
  );
};
