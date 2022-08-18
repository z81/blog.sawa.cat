import { Component, onMount } from "solid-js";

export type ArticleViewProps = {
  children: ChildNode
}


export const ArticleView: Component<ArticleViewProps> = ({ children }) => {

  return (
    <>
      <section class="article-view-container p-4 pb-0 pt-0 h-full font-sans overflow-y-scroll scrollbar scroll-smooth scrollbar-rounded scrollbar-w-16px">
        <article class="article-view-code before:(c-gray-400 h-5 font-fira text-4 fw-500)">
          <div class="text-5">{children}</div>
          {/* <div class="h-18 w-1"></div> */}
        </article>
        {/* <div class="pl-2 fixed bg-cool-gray-100 b-t b-r b-cool-gray-200 h-8 w-[calc(100vw-298px)] bottom-[24px] left-[249px] flex items-center">
          {123}
        </div> */}
      </section>
    </>
  );
}
