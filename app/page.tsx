
import Image from "next/image";
import History from "./components/History";
import "./globals.css";
import Post from "./components/Posts";
import UserRec from "./components/Userecomend";
import axios from "axios";

export default async function Home() {

    let posts = await axios.get('https://jsonplaceholder.typicode.com/photos')
    let users = await axios.get('https://jsonplaceholder.typicode.com/users')

    return (
        <div className="wrap mt-5 w-[95%] max-w-[1240px] mx-auto my-0 flex gap-10 mb-20">
            <main className="w-[800px]">
                <section className="p-4 border-2 w-full border-[#c4c4c4] flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar">
                    {
                        <>
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            <History title='name' />
                            {/* <History title='name' /> */}
                        </>
                    }
                </section>

                <section className="mt-10 flex flex-col gap-5">
                    {
                        posts.data.map((item: { url: string, id: number }) => (
                            <Post image={item.url} postId={item.id} />
                        ))
                    }
                </section>
            </main>
            <aside className="w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-[70px] h-[70px] rounded-full bg-[#c4c4c4]"></div>
                        <span>Example Name</span>
                    </div>

                    <button>Switch</button>
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <h4 className="text-[#9c9b9b]">Suggestions for you</h4>
                    <button className='text-blue-500'>See all</button>
                </div>

                <div className="flex flex-col gap-3 mt-5 sticky top-5">

                    {
                        users.data.map((item: { id: number, username: string }) => (

                            <UserRec name={item.username} userId={item.id} />
                        ))
                    }
                </div>
            </aside>
        </div>
    );
}
