
import Image from "next/image";

function History(props: any) {
    return ( 
        <div className="text-center">
            <div className="rounded-full p-1 border-2 border-[#f9f9f975] ">
                <div className="rounded-full h-12 w-12 bg-[#c4c4c4]">
    
                </div>
            </div>

            <span className="mt-4">{props.title}</span>
        </div>
     );
}

export default History;
