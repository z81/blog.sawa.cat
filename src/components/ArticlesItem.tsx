import { Component } from "solid-js";
import { fileIcons } from "../fileIcons";

export type ArticlesItemProps = {
  path: string;
  active?: boolean;
  isFolder?: boolean;
  collapsed?: boolean;
  onCollapse?: (nextState: boolean) => unknown;
}

export const ArticlesItem: Component<ArticlesItemProps> = (props) => {
  const fileName = props.path.split('/').pop();
  // @ts-ignore
  const iconClass: string = fileIcons[props.path.split('.')[1]] ?? '';
  const isNotRootFile = props.path.split('/').length > 3;

  return <a
    class="flex items-center gap-1 font-mono c-current decoration-none"
    classList={{
      "m-3 h-3 c-gray-600 fw-bold p-0": props.isFolder,
      "ml-2 mr-2 cursor-pointer p-2 pl-1": !props.isFolder,
      "bg-cool-gray-200 rounded-1": props.active,
      "pl-5": isNotRootFile,
    }}
    href={props.isFolder ? "#" : props.path}
    onClick={() => props.onCollapse?.(!props.collapsed)}
  >
    <div class={props.isFolder ? `i-ri:folder-fill c-gray-400 w-5 h-5` : `w-5 h-5 ${iconClass}`} />
    {fileName}
  </a>
}
