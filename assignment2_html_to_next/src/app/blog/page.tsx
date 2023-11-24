import Image from "next/image";
import { HeaderBlog } from "./header_blog";
import { BlogContent } from "./blog_content"
import { FooterBlog } from "./footer_blog";
import { HeadssBlog } from "./headssblog";

export default function Blog() {
    return (
      <main>
        <HeaderBlog />
        <BlogContent />
        <FooterBlog />
        <HeadssBlog/>
      </main>
    );
}