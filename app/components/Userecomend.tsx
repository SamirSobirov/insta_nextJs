import Link from "next/link";

type UserRecType = {
    name: string
    userId: number
}

function UserRec({ name, userId }: UserRecType) {
    return (
        <Link href={'/user/' + userId}>
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
                    <span>{name}</span>
                </div>

                <button className="text-[#0095F6]">Follow</button>
            </div>
        </Link>
    );
}

export default UserRec;