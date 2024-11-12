import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";

export interface ContentProps {
  avatar: string;
  name: string;
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  image?: string;
}

export function Content({
  avatar,
  name,
  username,
  content,
  timestamp,
  likes,
  retweets,
  replies,
  image,
}: ContentProps) {
  return (
    <Card className="max-w-xl w-full mx-auto">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold">{name}</h3>
              <span className="text-sm text-muted-foreground">@{username}</span>
              <span className="text-sm text-muted-foreground">
                · {timestamp}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-base">{content}</p>
        {image && (
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Tweet image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {replies}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-green-500"
          >
            <Repeat2 className="w-4 h-4 mr-2" />
            {retweets}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-red-500"
          >
            <Heart className="w-4 h-4 mr-2" />
            {likes}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
