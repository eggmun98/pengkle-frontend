export default function Home() {
  const newData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    content: '안녕하세요',
    writer: 'pengkle',
    createdAt: '2025-01-28',
    likes: 10,
    comments: 10,
  }));

  return (
    <>
      <div className="flex flex-row items-center gap-2 w-full p-2 ">
        <input
          type="text"
          placeholder="무슨 생각을 하고 있나요?"
          className="w-full bg-transparent border-none outline-none h-10"
        />
        <button className="bg-blue-500 text-white rounded-md p-2">작성</button>
      </div>
      <div className="w-full h-[1px]"></div>
      <div className="flex flex-col items-center justify-center w-full  gap-5">
        {newData.map((item) => (
          <div key={item.id} className="flex flex-col  gap-2 w-full p-2 bg-gray-100">
            <div className="flex flex-row items-center gap-2">
              <h1>{item.writer}</h1>
              <p>{item.createdAt}</p>
            </div>
            <p>{item.content}</p>
            <div className="flex flex-row items-center gap-2">
              <p>{item.likes}</p>
              <p>{item.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
