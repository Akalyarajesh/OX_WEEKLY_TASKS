import { useState } from "react";

const useDelete = <T,>() => {
  const [datas, setDatas] = useState<T[]>([]);

  //   this is for Api data

  //   const setInitialData = (items: T[]) => { setDatas(items); };

  const handleDelete = (index: number) => {
    const updateData = datas.filter((_, i) => i !== index);
    setDatas(updateData);
  };

  return { datas, setDatas, handleDelete };
};
export default useDelete;

// const { data, setInitialData } = useDelete<Employee>();

// useEffect(() => {
//   setInitialData(employees);
// }, []);
