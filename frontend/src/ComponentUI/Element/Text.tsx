function Text() {
  return (
    <div className="flex flex-col gap-8">
      {/* Heading Options */}
      <div className="flex flex-col gap-4">
        <h1 className="text-base font-bold  pb-5 border-b border-[#D7D7D7]">Heading</h1>
        <div className="flex flex-col gap-2.5">
          <h1 className="font-extrabold text-6xl">Heading 1</h1>
          <h2 className="font-extrabold text-5xl">Heading 2</h2>
          <h3 className="font-extrabold text-4xl">Heading 3</h3>
          <h4 className="font-extrabold text-3xl">Heading 4</h4>
          <h5 className="font-extrabold text-2xl">Heading 5</h5>
        </div>
      </div>
      {/* Paragraph Options */}
      <div className="flex flex-col gap-4">
        <h1 className="text-base font-extrabold pb-5 border-b border-[#D7D7D7]">Paragraph</h1>
        <div className="flex flex-col gap-2.5">
          <p className="font-extrabold text-2xl">Paragraph 1</p>
          <p className="font-extrabold text-xl">Paragraph 2</p>
          <p className="font-extrabold text-lg">Paragraph 3</p>
          <p className="font-extrabold text-base">Paragraph 4</p>
          <p className="font-extrabold text-sm">Paragraph 5</p>
          <p className="font-extrabold text-xs">Paragraph 6</p>
        </div>
      </div>
      {/* Title Options */}
      <div className="flex flex-col gap-4">
        <h1 className="text-base font-extrabold pb-5 border-b border-[#D7D7D7]">Title</h1>
        <div className="flex flex-col gap-2.5">
          <h1 className="font-extrabold text-2xl">Title 1</h1>
          <h2 className="font-extrabold text-xl">Title 2</h2>
          <h3 className="font-extrabold text-lg">Title 3</h3>
          <h3 className="font-extrabold text-base">Title 4</h3>
          <h3 className="font-extrabold text-sm">Title 5</h3>
          <h3 className="font-extrabold text-xs">Title 6</h3>
        </div>
      </div>
    </div>
  );
}

export default Text;
