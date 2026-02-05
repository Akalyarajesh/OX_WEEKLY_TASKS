const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 m-5  ">
        <div className="col-span-3  bg-blue-300 h-36 ">Header</div>
        <div className="bg-pink-300 h-36">small Banner</div>

        <div className="col-span-2 bg-amber-200 h-36">Banner</div>
        <div className="col-span-2  bg-indigo-200 h-36">Content</div>
        <div className="row-span-2 bg-green-200 ">Aside</div>

        <div className="col-span-2  bg-indigo-200 h-36">Content</div>
        <div className="col-span-3 bg-orange-200 h-36">Footer</div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="border"></div>
        <div className="col-span-4 col-start-2 bg-amber-400">01</div>
        <div className="border"></div>

        <div className="col-start-1 col-end-3 bg-red-300">02</div>
        <div className="border"></div>
        <div className="border"></div>

        <div className="col-span-2 col-end-7 bg-green-400">03</div>
        <div className="col-start-1 col-end-7 bg-pink-600">04</div>
      </div>
      {/* <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 bg-amber-400">01</div>
        <div className="col-start-1 col-end-3 bg-red-300">02</div>
        <div className="col-span-2 col-end-7 ...">03</div>
        <div className="col-start-1 col-end-7 ...">04</div>
      </div> */}
    </>
  );
};

export default Grid;
