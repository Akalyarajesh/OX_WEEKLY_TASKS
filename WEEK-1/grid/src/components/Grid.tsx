const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 m-5  ">
        <div className="col-span-3  bg-blue-300 h-36 ">Header</div>
        <div className=" bg-amber-200 h-36">Banner</div>
        <div className="bg-pink-300 h-36">small Banner</div>
        <div className="  bg-indigo-200 h-36">Content</div>
        <div className=" bg-green-200 h-36">Aside</div>
        <div className=" bg-orange-200 h-36">Footer</div>
      </div>
    </>
  );
};

export default Grid;
