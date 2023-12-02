
export default function Counter() {
  return (
    <div className="w-full h-full flex justify-around mt-10 pl-5 pr-5 sm:pl-36 sm:pr-36">
        <div className="flex flex-col gap-4 items-center justify-center bg-white w-1/4 h-28 rounded-xl sm:w-1/5 lg:h-60"><h1>100</h1><p>Hours</p></div>
        <div className="flex flex-col gap-4 items-center justify-center bg-white w-1/4 h-28 rounded-xl sm:w-1/5 lg:h-60"><h1>100</h1><p>Minutes</p></div>
        <div className="flex flex-col gap-4 items-center justify-center bg-white w-1/4 h-28 rounded-xl sm:w-1/5 lg:h-60"><h1>100</h1><p>Seconds</p></div>
      </div>
  )
}
