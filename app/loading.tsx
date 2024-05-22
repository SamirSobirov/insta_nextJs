export default function Loading() {
  return (
    // <span>loading...</span>
    <div className="items-center justify-center text-center mt-[100px]">
    <div className="w-full gap-x-2 flex justify-center items-center">
  <div
    className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
  ></div>
  <div
    className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
  ></div>
  <div
    className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
  ></div>
</div>

    </div>
  );
}
