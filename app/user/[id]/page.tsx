import axios from "axios";

type userType = {
    id: number
    name: string
    username: string
    email: string
}

async function User(props: any) {
    console.log(props);


    let user = await axios.get('https://jsonplaceholder.typicode.com/users/' + props.params.id)
    let userData: userType = await user.data


    return (
        <div className="wrap mt-5 w-[95%] max-w-[1240px] mx-auto my-0 flex gap-10 mb-20">
            <main className="my-auto">
                <section className="my-10 mx-10 flex items-center gap-[100px]">
                    <div className="w-[150px] h-[150px] rounded-full bg-[#c4c4c4]"></div>
                    <div className="flex flex-col justify-between gap-5">
                        <h3 className="text-3xl">{userData.username}</h3>
                        <div className="flex gap-5 text-xl">
                            <span>14 posts</span>
                            <span>1488 followers</span>
                            <span>88 following</span>
                        </div>

                        <h4 className="text-lg">{userData.name}</h4>
                    </div>
                </section>

                <section className="w-full flex flex-wrap gap-4 my-auto">
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    <div className="bg-[#c4c4c4] w-[390px] h-[390px]"></div>
                    
                </section>
            </main>
        </div>
    );
}

export default User;