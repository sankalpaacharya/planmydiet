import { Play } from "lucide-react";
import videos from "@/data/videos.json"
export default function Videos() {

  return (
    <div className="p-4 max-w-7xl">
      <h1 className="text-2xl font-semibold mb-6">Recommended Videos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos && videos.length > 0 && videos.map((video) => (
          <div key={video.id} className="rounded-lg shadow-lg overflow-hidden group hover:cursor-pointer">
            <div className="relative rounded-lg overflow-hidden h-0 pb-[56.25%]">
              <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-lg font-semibold line-clamp-2">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <p className="text-sm text-gray-500">
                {video.views} • {video.uploaded}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

