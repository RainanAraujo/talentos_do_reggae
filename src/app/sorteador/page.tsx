"use client";
import { useCallback, useMemo, useState } from "react";

// Math.counter = 0;

// const frozenResults = {
//   7: (1 / 9) * 4,
// };

// Math.randomOriginal = Math.random;

// Math.random = () => {
//   if (Math.counter in frozenResults) {
//     Math.counter++;
//     return frozenResults[Math.counter - 1];
//   }
//   Math.counter++;
//   return Math.randomOriginal();
// };

export default function Drawer() {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ]);

  const availableList = useMemo(
    () => list.filter((item) => !selectedList.includes(item)),
    [list, selectedList]
  );

  const handleSelect = useCallback((item: string) => {
    setSelectedList((prev) => [...prev, item]);
  }, []);

  // window["randomRange"] = (start: number, end: number) =>
  //   Math.floor(Math.random() * (end - start)) + start;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  w-full m-auto  px-20  max-md:p-0 max-w-7xl max-md:max-w-full">
        <div className="bg-neutral-900 rounded-lg h-[80vh] max-md:min-h-screen w-full flex ">
          <div className="flex flex-col justify-between flex-1 ">
            <div className="px-20 overflow-hidden py-20  h-full max-md:p-5  max-md:pt-20  gap-y-5 flex flex-col relative ">
              <p>Items: {availableList.join(", ")}</p>
              <p>Selected: {selectedList.join(", ")}</p>
              <button
                onClick={() => {
                  do {
                    var selectedIndex = Math.floor(
                      Math.random() * availableList.length
                    );
                  } while (
                    !(selectedIndex in availableList) &&
                    availableList.length != 0
                  );
                  if (selectedIndex in availableList)
                    handleSelect(availableList[selectedIndex]);
                }}
              >
                teste
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
