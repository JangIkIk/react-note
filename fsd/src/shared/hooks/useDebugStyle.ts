import { type HTMLAttributes, type CSSProperties } from "react";
import { useAppSelector } from "@app/hooks";

type CustomHTMLAttributes<T> = {
  "data-fsd"?: string;
} & HTMLAttributes<T>;

type Layer = "pages" | "widget" | "features" | "entities" | "shared";

const colorLine: Record<Layer, string> = {
  pages: "#b3b344",
  widget: "#fa0ee9dd",
  features: "#14a200dd",
  entities: "#2573e5dd",
  shared: "brown",
};

/*
    제네릭으로 받아야하는이유 ? 타입점검 다시해야함
    *.style 에는 css root변수를 선언하여 css 파일에서 접근이 가능한거임
    즉, 인라인으로 색상 루트변수를 선언하는 방식임
*/

export function useDebug<T extends HTMLElement>(layerName: string){
  const isDebugMode = useAppSelector((state) => state.line.value);
  const debugStyle: CustomHTMLAttributes<T> = {};
  const [layer] = layerName.split("/") as [Layer];

  if (isDebugMode) {
    debugStyle['data-fsd'] = layerName;
    debugStyle.style = { '--fsd-background-color': `${colorLine[layer]}`} as CSSProperties;
  }

  return {
    debugStyle,
  };
}
