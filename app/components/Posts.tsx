import Image from "next/image";
import Link from "next/link";
import { TbMessageCircle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { PiPaperPlaneTiltLight } from "react-icons/pi";


type Post = {
  image: string;
  postId: number;
};

function Post({ image, postId }: Post) {
  return (
    <div className="py-2 border-2 border-[#c4c4c4]">
      <div className="ml-5 mb-3 flex gap-3 items-center ">
        <div className="w-10 h-10 bg-[#E5E5E5] rounded-full"></div>
        <span>Sobirov S</span>
      </div>

      <img
        src={""}
        alt="post"
        className="bg-[#E5E5E5] w-full h-[400px] object-cover"
      />

      <div className="mt-5 ml-5 flex gap-3 items-center whitespace-nowrap">

        <button>
          <FaRegHeart size={25} />
        </button>

        <Link href={"/comments/" + postId}>
          <button>
            <TbMessageCircle size={25} />
          </button>
        </Link>

        <button>
          <PiPaperPlaneTiltLight size={25} />
        </button>
      </div>

      <div className="mt-5 pt-3 border-t-2 border-[#c4c4c4] flex justify-between">
        <div className="flex ml-5 gap-4">
          {/* <GoSmiley size={30} /> */}
          <input type="text" placeholder="Add a comment..." />
        </div>
        <button className="text-blue-500 mr-5">Post</button>
      </div>
    </div>
  );
}

export default Post;
