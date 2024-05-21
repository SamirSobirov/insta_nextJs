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
                    <div className="w-10 h-10 rounded-full bg-[#c4c4c4]"></div>
                    <span>{name}</span>
                </div>

                <button className="text-[#0095F6]">Follow</button>
            </div>
        </Link>
    );
}

export default UserRec;