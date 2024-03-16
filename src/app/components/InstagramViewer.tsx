import HorizontalAnimWrapper from "./HorizontalAnimWrapper";
import { Cards } from "@phosphor-icons/react/dist/ssr/Cards";

export default async function InstagramViewer() {
  const { data } = await getData();
  return (
    <div className="gap-4 w-full flex flex-col">
      <HorizontalAnimWrapper
        className="w-full overflow-x-auto overflow-y-hidden flex no-scrollbar max-md:px-5 px-20"
        direction={200}
      >
        <ImagesViewer
          images={data.filter(
            (item: any) =>
              item.media_type === "IMAGE" ||
              item.media_type === "CAROUSEL_ALBUM"
          )}
        />
      </HorizontalAnimWrapper>
      <HorizontalAnimWrapper
        direction={200}
        className="w-full overflow-x-auto overflow-y-hidden flex no-scrollbar max-md:px-5 px-20"
      >
        <VideoViewer
          videos={data.filter((item: any) => item.media_type === "VIDEO")}
        />
      </HorizontalAnimWrapper>
    </div>
  );
}

async function getData() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function ImagesViewer({ images }: { images: object[] }) {
  return (
    <div className="flex gap-4">
      {images.map((image: any, index: number) => (
        <div
          key={index}
          className="w-80 h-80 relative cursor-pointer hover:scale-105 hover:transform duration-300 ease-in-out"
        >
          <img
            width={200}
            height={200}
            src={image.media_url}
            alt=""
            className="w-full h-full object-cover"
          />

          {image.media_type === "CAROUSEL_ALBUM" && (
            <Cards
              className="w-8 h-8 absolute right-2 top-2 text-white "
              weight="fill"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function VideoViewer({ videos }: { videos: object[] }) {
  return (
    <div className="flex gap-4">
      {videos.map((video: any, index: any) => (
        <div
          key={index}
          className="w-80 h-[580px] hover:scale-105 cursor-pointer hover:transform duration-300 ease-in-out"
        >
          <video
            src={video.media_url + "#t=0.001"}
            loop
            muted
            controls
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
