export default async function InstagramViewer() {
  const { data } = await getData();

  return (
    <div className="flex ">
      {data &&
        data.map((post: any) => {
          return (
            <div key={post.id} className="flex-shrink-0 w-96 h-96 p-4 ">
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="w-full h-72 object-cover"
                />
                <p className="text-sm font-light">{post.caption}</p>
              </a>
            </div>
          );
        })}
    </div>
  );
}

async function getData() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  return data;
}
