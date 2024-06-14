import Image from "next/image"

export default function CustomCard({item}){
    return (
        <div className="border">
            <Image src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} width={500} height={500}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}