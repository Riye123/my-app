import { Button } from "flowbite-react";

export default function CustomCard({item}){
    return (
            <div className="container mx-auto border-4 border-gray-400 rounded-xl shadow-custom-dark bg-white" style={{margin:'10px'}}>
                <img  className="rounded-t-lg" src={item.Picture.PictureUrl1} alt={item.DescriptionDetail} height={500} width={500}/>
                <h3 className="text-2xl font-bold mb-4">{item.ScenicSpotName}</h3>
                <div style={{margin:'10px'}}>{item.DescriptionDetail}</div>

            </div>
    )   
}