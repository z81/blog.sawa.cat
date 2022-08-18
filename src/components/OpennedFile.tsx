import { Component, createEffect, JSX, onMount } from "solid-js";
import { fileIcons } from "../fileIcons";

export type OpennedFileProps = {
  path: string;
  active?: boolean;
}
export const OpennedFile: Component<OpennedFileProps> = ({ path, active }) => {
  const fileName = path.split('/').pop();
  // @ts-ignore
  const iconClass = fileIcons[path.split('.')[1]];

  return (
    <a
      classList={{ "bg-cool-gray-200": active }}
      href={path}
      class="c-current decoration-none font-mono flex gap-1 items-center p-1 pl-3 pr-2 h-5 m-1 rounded-1 hover:bg-cool-gray-200"
    >
        <div class="bg-blue-600 text-5" classList={{ [iconClass]: true }}></div>
        {fileName}
        <div class="rounded-full ml-2 w-2 h-2 bg-gray-400"></div>
    </a>
  );
}
