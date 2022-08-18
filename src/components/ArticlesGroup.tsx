import { Component, createSignal } from "solid-js";
import { ArticlesItem } from "./ArticlesItem";

export type ArticlesGroupProps = {
  title: string;
  files: { url: string }[];
  path: string;
}

export const ArticlesGroup: Component<ArticlesGroupProps> = (props) => {
  const [collapsed, setCollapsed] = createSignal(true)

  return <>
    {props.title !== "articles" && <ArticlesItem onCollapse={setCollapsed} path={props.title} isFolder collapsed={collapsed()} />}
    {collapsed() && props.files.map(post => (
      <ArticlesItem path={post.url} active={props.path === post.url} />
    ))}
  </>
}
