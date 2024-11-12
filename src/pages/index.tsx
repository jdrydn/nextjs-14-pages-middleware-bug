import Link from "next/link";
import { Content, ContentProps } from "@/components/content";

interface IndexProps {
  content: ContentProps;
}

export function getServerSideProps() {
  const content: ContentProps = {
    avatar: "https://github.com/jdrydn.png",
    name: "jdrydn",
    username: "jdrydn",
    content: "Check out this amazing view from my hike today!",
    timestamp: "5m",
    likes: 100,
    retweets: 20,
    replies: 10,
    // image: "https://example.com/hike-image.jpg",
  };

  return {
    props: {
      content,
    } satisfies IndexProps,
  };
}

export default function Home({ content }: IndexProps) {
  return (
    <div className="flex flex-col w-full items-center p-10 gap-y-4">
      <Link className="max-w-xl w-full mx-auto" href="/content/1">
        <Content {...content} />
      </Link>
      <Content {...content} />
      <Content {...content} />
      <Content {...content} />
    </div>
  );
}
