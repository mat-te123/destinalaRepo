interface MyPlayerProps {
  src: string;
}

export const MyPlayer = ({ src }: MyPlayerProps) => {
  return (
    <div className="aspect-video w-full flex justify-center items-center bg-gray-500 rounded-lg">
      <iframe
        className="w-3/4 h-3/4   rounded-lg"
        src={src}
        title="video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};