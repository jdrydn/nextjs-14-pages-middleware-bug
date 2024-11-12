import Link from "next/link";
import type { GetServerSidePropsContext } from "next";
import { Content, ContentProps } from "@/components/content";

interface SingleProps {
  content: ContentProps;
}

export function getServerSideProps({ params }: GetServerSidePropsContext) {
  const { id: contentId } = params ?? {};
  if (typeof contentId !== "string") {
    return {
      notFound: true,
    };
  }
  if (contentId !== "1") {
    return {
      notFound: true,
    };
  }

  const content: ContentProps = {
    avatar: "https://github.com/jdrydn.png",
    name: "jdrydn",
    username: "jdrydn",
    content: "Check out this amazing view from my hike today!",
    timestamp: "5m",
    likes: 100,
    retweets: 20,
    replies: 10,
    image: "/wallpaper.png",
  };

  return {
    props: {
      content,
    } satisfies SingleProps,
  };
}

export default function Single({ content }: SingleProps) {
  return (
    <div className="flex flex-col w-full items-center p-10 gap-y-4">
      <Link className="max-w-xl w-full mx-auto" href="/">
        Back
      </Link>
      <Content {...content} />
    </div>
  );
}
