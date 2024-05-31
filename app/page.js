/** 
 * @author 邵聖皓 <harrison0975294673@gmail.com>
*/
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,Footer, FooterCopyright, FooterLink, FooterLinkGroup,Carousel,Card,DarkThemeToggle} from "flowbite-react";
import CustomCard  from "@/Components/Card"; //絕對路徑

export default function Component() {

  const items = [
    {
      "ScenicSpotID": "C1_376490000A_000001",
      "ScenicSpotName": "雲林布袋戲館",
      "DescriptionDetail": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！一提到布袋戲這台灣之光，就不得不提到布袋戲的故鄉雲林虎尾鎮，而位於虎尾的雲林布袋戲館，就跟大家來特別介紹一下吧。 雲林布袋戲館展示布袋戲的發展史和靜態戲偶陳列，讓民眾能前來了解傳統布袋戲的發展，並保存傳統布袋戲，不讓文物文化流失。布袋戲館的成立，讓大家可以有地方吸收布袋戲文化，了解布袋戲過去的歷史，進而認同傳統藝術布袋戲。注意事項：1.全面禁煙、設攤兜售2.除導盲犬及功能犬，攜伴其他動物請置放可攜容器內3.12歲以下兒童需由成人帶領4.攝影勿開閃光燈5.展示品請勿觸摸及破壞公物6.學術單位或媒體需要拍攝者請於一周前申請7.展廳內勿飲食",
      "Description": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！",
      "Phone": "886-5-6313080",
      "Address": "雲林縣虎尾鎮林森路一段498號",
      "ZipCode": "632",
      "TravelInfo": "大眾運輸：台西客運虎尾站，下車步行1分鐘。開車：林森路一段與公安路交接口右邊-雲林布袋戲館位置：館於虎尾郵局斜對面、土地銀行旁",
      "OpenTime": "10:00-18:00一二公休，其餘依臉書公告而定",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023134430252UEWYU.jpg",
        "PictureDescription1": "雲林布袋戲館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2202230231344458532J571.jpg",
        "PictureDescription2": "雲林布袋戲館"
      },
      "MapUrl": "https://goo.gl/maps/bLNjsdS1nnaMrw3bA",
      "Position": {
        "PositionLon": 120.43340301513672,
        "PositionLat": 23.709280014038086,
        "GeoHash": "wsjwus0ut"
      },
      "Class1": "文化類",
      "Class2": "古蹟類",
      "Class3": "藝術類",
      "ParkingInfo": "館後方有公安路收費停車場(限自小客車)。此為資訊揭露，依停車場之規定為主。  為避免參觀人車造成館前交通要道壅塞，大客車(九人座以上遊覽車輛)，請在入口放人後，車輛儘速移走。",
      "ParkingPosition": {},
      "TicketInfo": "免費自行參觀  自費項目：DIY課程酌收材料費、劇團售票演出、預約導覽",
      "Keyword": "雲林布袋戲館,虎尾",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000002",
      "ScenicSpotName": "北港朝天宮",
      "DescriptionDetail": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。位於雲林北港的北港朝天宮，舊稱「天妃廟」或「天后宮」，是一座歷史悠久莊嚴的媽祖廟，建立於1694年至今已經300多年的歷史，也是國定第二級古蹟。 宗教廟宇是人民重要的精神寄託，每年農曆三月十九、二十日是北港地區更熱鬧的日子「北港朝天宮迎媽祖」的繞境活動，讓全民「瘋媽祖」。繞境的範圍並不會前往到其他縣市，卻有著許多專屬於北港朝天宮的特色。",
      "Description": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。",
      "Phone": "886-5-7832055",
      "Address": "雲林縣北港鎮中山路178號",
      "ZipCode": "651",
      "TravelInfo": "國道南下：走國道3號從古坑系統國道1號從雲林系統，接78號快速道路，往台西方向從虎尾交流下走145縣道，若從元長交流道下走台19線，從東勢交流道下走153號縣道再接155縣道。 國道北上：國道1號下嘉義交流道(北港/新港)，直行縣道159線(太保市北港路;新港鄉中山路)，左轉縣道164線(福德路)，右轉台19線過北港大橋 ，直行雲林北港鎮義民路 ，右轉中正路或民主路。",
      "OpenTime": "05:00-00:00(特殊情況依廟方時間為主)",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220209053049151053QRMQF.jpg",
        "PictureDescription1": "北港朝天宮",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613114737271145CW3UP.jpg",
        "PictureDescription2": "北港朝天宮",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206131148518026821JGU2.jpg",
        "PictureDescription3": "北港朝天宮"
      },
      "MapUrl": "https://goo.gl/aCQLBm",
      "Position": {
        "PositionLon": 120.30480194091797,
        "PositionLat": 23.568090438842773,
        "GeoHash": "wsjw1d7q1"
      },
      "Class3": "遊憩類",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "北港朝天宮",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000003",
      "ScenicSpotName": "成龍濕地",
      "DescriptionDetail": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。成龍濕地位於雲林口湖鄉，是一般保護區，被列為國家重要濕地之一，目前已由荒廢的田地演化為生物群集的濕地，每年都有成千上萬的候鳥飛來駐足棲息，有瀕臨絕種的黑面琵鷺，還有小燕鷗、紅隼等等，更有豐富的魚類及螃蟹等，儼然是地方重要觀光資源。",
      "Description": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。",
      "Phone": "886-5-7970213",
      "Address": "口湖鄉成龍村(成龍社區發展協會)",
      "ZipCode": "653",
      "TravelInfo": "斗南交流道下往北港方向行駛，於164縣道往口湖近入金湖走台十七線成龍二橋旁。",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954870096V2958.jpg",
        "PictureDescription1": "成龍濕地",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2301160239549169729JJH8.jpg",
        "PictureDescription2": "成龍濕地",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954932601VAHBE.jpeg",
        "PictureDescription3": "成龍濕地"
      },
      "MapUrl": "https://goo.gl/niV37K",
      "Position": {
        "PositionLon": 120.16419982910156,
        "PositionLat": 23.55491065979004,
        "GeoHash": "wsjqn2hck"
      },
      "Class1": "自然風景類",
      "ParkingInfo": "安龍宮前廣場或路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀，需要預約導覽服務請來電洽詢",
      "Keyword": "濕地,黑面琵鷺,小燕鷗,黑嘴鷗,紅隼,彩鷸,紅尾伯勞,燕鴴",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000024",
      "ScenicSpotName": "偶的家-戲偶文創園區",
      "DescriptionDetail": "傳統國粹，細緻展現。以長年雕刻偶頭出身的徐炎卿師父，其家族後人開創的戲偶文創園區收藏了著名的布袋戲角色，經典角色譬如：史艷文、素還真、黑白郎君等等，留待大家近距離見識偶的美、偶的細節。布袋戲深耕台灣百年也是台灣具有代表性地方文化，精彩的布袋戲表演背後布袋戲偶的雕刻製作絕對功不可沒，徐炎卿大師從50年代開始投入布袋戲偶雕刻，也製作出風靡全台的布袋戲精典角色史艷文、藏鏡人、黑白郎君、劉三、怪老子、二齒等知名人物，炎卿大師的子孫也傳承了這項工藝，目前也已經傳承到第三代了。",
      "Description": "傳統國粹，細緻展現。以長年雕刻偶頭出身的徐炎卿師父，其家族後人開創的戲偶文創園區收藏了著名的布袋戲角色，經典角色譬如：史艷文、素還真、黑白郎君等等，留待大家近距離見識偶的美、偶的細節。",
      "Phone": "886-5-5970699",
      "Address": "雲林縣斗南鎮建國三路506號",
      "ZipCode": "630",
      "TravelInfo": "南下：斗南交流道左轉大業路往斗南右轉延平一段接二段右轉建國三路。 北上：過大林交流道接 78號東西向(古坑線)下斗南快速道左轉建國三路。 火車：搭乘台鐵列車至斗南車站下車，再轉搭計程車前往建國三路~偶的家。",
      "OpenTime": "09:00-18:00一公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180809055042.jpg",
        "PictureDescription1": "炎卿偶的家"
      },
      "MapUrl": "https://goo.gl/Vqyor2",
      "Position": {
        "PositionLon": 120.47229766845703,
        "PositionLat": 23.66724967956543,
        "GeoHash": "wsjwtkmpx"
      },
      "Class3": "遊憩類",
      "ParkingInfo": "可停園區外圍的人行道，遊覽車可臨停路邊。",
      "ParkingPosition": {},
      "TicketInfo": "免費  戲偶工藝展場需購門票50元，可抵消費，100公分以下免費。",
      "Remarks": "DIY手作教室開班時間： 平日（星期二～五）採預約制，滿五人報名即開班 假日（星期六、日）開班時間10:00~12:00 14:00~16:00 凡購買材料包者可免費參觀戲偶工藝展場",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000025",
      "ScenicSpotName": "太平老街",
      "DescriptionDetail": "古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。太平老街位於雲林縣斗六市的太平路上，全長約600公尺，太平路一直是斗六的主要商店街，老街上的樓房建築特色以巴洛克式風格為主體設計，於日治時代建立至今已超過90多年的歷史，每棟樓房建築為兩層樓高，部分樓房更有刻上家族姓氏，於牆面及外壁上皆刻有精美及栩栩如生的雕飾圖案，除了呈現建築藝術的美感之外，還有顯赫名門世家的意涵存在。",
      "Description": "古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。",
      "Phone": "886-5-5332000",
      "Address": "雲林縣斗六市太平路",
      "ZipCode": "640",
      "TravelInfo": "【自行開車】 南下：自國道三號斗六交流道下，沿石榴路直行，續接文化路，進入斗六圓環接太平路即可抵達。 北上：自國道三號古坑交流道下，接78號公路斗六出口下，沿仁愛路直行接中山路，右轉接太平路即可抵達。 【搭乘火車】 搭乘火車至斗六火車站，沿大同路直行遇太平路抵達。",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20190123114452.jpg",
        "PictureDescription1": "太平老街商家林立",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/old/20180607110116.jpg",
        "PictureDescription2": "巴洛克式風格建築",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/old/20180607110113.jpg",
        "PictureDescription3": "蔡姓街屋"
      },
      "MapUrl": "https://goo.gl/aRQk2U",
      "Position": {
        "PositionLon": 120.54180145263672,
        "PositionLat": 23.70853042602539,
        "GeoHash": "wsjwyupb5"
      },
      "Class1": "遊憩類",
      "ParkingInfo": "附近付費停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "太平老街",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000027",
      "ScenicSpotName": "行啟記念館",
      "DescriptionDetail": "紅磚黑瓦，雅緻集會中心紀念日本皇太子裕仁訪台，是成為斗六市民重要的集會事務空間。以日式紅磚黑瓦建構，每周日前廣場舉辦在地小農市集，記念館明亮高大，其他附屬建築小巧雅緻，是斗六旅遊必經之地。行啟記念館的設立，源自於紀念來台行啟的裕仁皇太子。日本天皇出巡視察稱為「行幸」，皇太子或是皇后則稱為「行啟」。 「斗六行啟記念館」創於1926年，是由當地士紳吳克明發起與地方鄉親捐款和官方共同集資而成，至今已有90多年的歷史。 一方面作為裕仁皇太子行啟台灣事蹟之記念，另一方面則作為居民聚會之公共建築物，以滿足當地居民對公共聚會空間(集會、學習、宴會、表演)的需求。 光復後，本館先後租給「地下水公司」、「嘉義監理站斗六分站」、「軍公教福利品中心」等單位。",
      "Description": "紅磚黑瓦，雅緻集會中心紀念日本皇太子裕仁訪台，是成為斗六市民重要的集會事務空間。以日式紅磚黑瓦建構，每周日前廣場舉辦在地小農市集，記念館明亮高大，其他附屬建築小巧雅緻，是斗六旅遊必經之地。",
      "Phone": "886-5-5339479",
      "Address": "雲林縣斗六市府前街101號",
      "ZipCode": "640",
      "TravelInfo": "(國道3號)斗六交流道下接台3線往斗六市區仁義路 中山路171巷右轉府前路即可到達行啟記念館",
      "OpenTime": "13:00-21:00六日09:00-21:00一二公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20181121023809.jpg",
        "PictureDescription1": "展售空間"
      },
      "MapUrl": "https://goo.gl/maps/NgR9rNQQHJq",
      "Position": {
        "PositionLon": 120.54190063476562,
        "PositionLat": 23.70611000061035,
        "GeoHash": "wsjwygxfj"
      },
      "Class1": "其他",
      "ParkingInfo": "附近公立停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "行啟館",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000049",
      "ScenicSpotName": "源順芝麻觀光油廠",
      "DescriptionDetail": "廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」是通過經濟部評鑑觀光工廠，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。",
      "Description": "廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」是通過經濟部評鑑觀光工廠，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。",
      "Phone": "886-5-6622574",
      "Address": "雲林縣土庫鎮成功路1-62號",
      "ZipCode": "633",
      "TravelInfo": "【南下】國道一號過斗南交流道，國道三號過斗六交流道，接78號快速道路，往台西方向， 【北上】國道一號過斗南收費站，國道三號過古坑收費站，接78號快速道路，往虎尾土庫方向， 下（虎尾、土庫）第一個交流道，左轉往北港方向，3分鐘過天主教永年中學後，於土庫外環道左轉，30秒經土庫國小越港分校，就可以看到我們了。歡迎光臨。",
      "OpenTime": "參觀場域09:30-17:30商品販售08:00-18:00",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20190123115108.jpg",
        "PictureDescription1": "源順芝麻觀光油廠",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220513042303926212Z5H94.png",
        "PictureDescription2": "源順芝麻觀光油廠2",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130423039574624RNEV.png",
        "PictureDescription3": "源順芝麻觀光油廠3"
      },
      "MapUrl": "https://goo.gl/VLZU7e",
      "Position": {
        "PositionLon": 120.39469909667969,
        "PositionLat": 23.674110412597656,
        "GeoHash": "wsjwetsxx"
      },
      "Class1": "觀光工廠類",
      "ParkingInfo": "備有停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000085",
      "ScenicSpotName": "虎尾厝沙龍",
      "DescriptionDetail": "老厝變沙龍 虎尾藝文新據點   前立委王麗萍費了二年功夫整理，將隱身於虎尾市區一棟七十多年「興亞式」老厝重新整理，營造成推動生態、性別、另類全球化的據點，不僅為雲林留下一棟歷史建築，更增加一處推廣藝術、文化、生態、性別主義的沙龍。   虎尾厝沙龍隱身於虎尾市區巷弄之中，是一棟兼具「和風」與「洋味」的建築，約興建於一九四○年代，因都市擴展，被淹沒在建築群之中，虎尾人知道反而不多，二年多前王麗萍因緣際會下，買下這棟建築，著手整理後，營造成以發展深刻藝文的空間。    虎尾厝沙龍是雲林縣第一個嘗試結合藝術、文化、生態、環保、文學的空間，王麗萍表示，虎尾厝將這棟老建築的美保留下來，同時加入許多現代藝術創作，展現思考、討論的精神，為雲林保留一棟值得品味的公共建築。",
      "Description": "老厝變沙龍 虎尾藝文新據點   前立委王麗萍費了二年功夫整理，將隱身於虎尾市區一棟七十多年「興亞式」老厝重新整理，營造成推動生態、性別、另類全球化的據點，不僅為雲林留下一棟歷史建築，更增加一處推廣藝術、文化、生態、性別主義的沙龍。   虎尾厝沙龍隱身於虎尾市區巷弄之中，是一棟兼具「和風」與「洋味」的建築，約興建於一九四○年代，因都市擴展，被淹沒在建築群之中，虎尾人知道反而不多，二年多前王麗萍因緣際會下，買下這棟建築，著手整理後，營造成以發展深刻藝文的空間。    虎尾厝沙龍是雲林縣第一個嘗試結合藝術、文化、生態、環保、文學的空間，王麗萍表示，虎尾厝將這棟老建築的美保留下來，同時加入許多現代藝術創作，展現思考、討論的精神，為雲林保留一棟值得品味的公共建築。",
      "Phone": "886-5-6313826",
      "Address": "雲林縣虎尾鎮 民權路51巷3號",
      "ZipCode": "632",
      "OpenTime": "<p>週三至週日10：00-17：30</p>",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613020312563714WCEX4.jpg",
        "PictureDescription1": "虎尾厝沙龍",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206130203125949851JKYK.jpg",
        "PictureDescription2": "虎尾厝沙龍",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206130203126262304XQGQ.jpg",
        "PictureDescription3": "虎尾厝沙龍"
      },
      "MapUrl": "https://maps.app.goo.gl/LdkjeSvkE6jm27FD6",
      "Position": {
        "PositionLon": 120.43589782714844,
        "PositionLat": 23.709619522094727,
        "GeoHash": "wsjwus4wx"
      },
      "WebsiteUrl": "https://m.facebook.com/huwei.salon/",
      "ParkingInfo": "公共停車場、路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "本建物為現任屋主自主修復並主動提報為縣定歷史建築，入館參觀僅收取60元「文化資產維護費」(可抵消費)。入座每人低消為220元，享有不限時的閱讀時光，以及無所不在的生活美感呈現。",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000086",
      "ScenicSpotName": "魔羯魚祈福館",
      "DescriptionDetail": "為佛教文化藝術的展覽館，以祈福為主題的文化創意商店  館藏一百多件精美的佛像、唐卡、文物，讓您有如遠赴西藏佛境  走進魔羯魚祈福館，日子彷彿變得緩慢又舒適  簡單的一杯茶或咖啡，享受禪意的生活步調    【1F/ 咖啡．茶、藏香、文創商品】  【2F/ 魔羯魚美術館】  【3F/ 瑜珈教室】  satiyoga覺瑜珈－課程時間：週五19:30~21:00  昆達里尼瑜珈－課程時間：週四18:30~20:00",
      "Description": "為佛教文化藝術的展覽館，以祈福為主題的文化創意商店  館藏一百多件精美的佛像、唐卡、文物，讓您有如遠赴西藏佛境  走進魔羯魚祈福館，日子彷彿變得緩慢又舒適  簡單的一杯茶或咖啡，享受禪意的生活步調    【1F/ 咖啡．茶、藏香、文創商品】  【2F/ 魔羯魚美術館】  【3F/ 瑜珈教室】  satiyoga覺瑜珈－課程時間：週五19:30~21:00  昆達里尼瑜珈－課程時間：週四18:30~20:00",
      "Phone": "886-5-5321775",
      "Address": "雲林縣斗六市城頂街146-5號",
      "ZipCode": "640",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709042536.jpg",
        "PictureDescription1": "魔羯魚祈福館"
      },
      "Position": {
        "PositionLon": 120.54029846191406,
        "PositionLat": 23.7064208984375,
        "GeoHash": "wsjwygwgb"
      },
      "ParkingInfo": "雲林溪平面停車場（斗六西平路郵局斜對面），每日50元",
      "ParkingPosition": {},
      "TicketInfo": "【2F/ 魔羯魚美術館】免費參觀要預約  導覽門票50元",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000087",
      "ScenicSpotName": "雅聞峇里海岸觀光工廠",
      "DescriptionDetail": "無須出境，也有南洋風景。雲林斗六獨樹一格的觀光區域，甚至曾邀請蕭敬騰代言在地特色。雅聞峇里海岸觀光工廠擁有傲人的寬闊空間，偌大園區足足有十餘種不同主題的廠區，不需要出國，也能坐擁豐富多元的南洋風情，讓您打卡也會打到手軟。專門生產雅聞熱賣的柳杉芬多精透明皂的雅聞峇里海岸，落於斗六石榴班百年火車站旁，是國內最大的南洋風情景觀，舒壓、藝術、美學、購物的旅遊勝地。擁有大規模的茅草屋群，棕櫚樹、迎賓瀑布、鏡面水池、藝廊空間及明媚的沙灘風景。來此可了解香氛肥皂的製作過程，同時徜徉於南洋風情，慢活愜意! 入園參觀免門票，園區內設有異國風味餐廳，提供下午茶及餐點服務，遊客可選擇在戶外的茅草屋下，悠閒的享用美食同時感受南洋風的氛圍，草原區也新增多種優雅的茶玫瑰及蔓玫可供欣賞。另一邊首創大型人造沙灘是親子同樂的熱門景點。此外也提供香氛DIY課程，歡迎團體遊客預約報名喔！圖片來源：業者提供。",
      "Description": "無須出境，也有南洋風景。雲林斗六獨樹一格的觀光區域，是通過經濟部評鑑觀光工廠，甚至曾邀請蕭敬騰代言在地特色。雅聞峇里海岸觀光工廠擁有傲人的寬闊空間，偌大園區足足有十餘種不同主題的廠區，不需要出國，也能坐擁豐富多元的南洋風情，讓您打卡也會打到手軟。",
      "Phone": "886-5-5511585",
      "Address": "斗六市中興路333號",
      "ZipCode": "640",
      "OpenTime": "08:30-17:00",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130418060582544JF65.jpg",
        "PictureDescription1": "雅聞峇里海岸觀光工廠",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220513041806089507QLPF6.jpg",
        "PictureDescription2": "雅聞峇里海岸觀光工廠2",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130418061520347UE39.png",
        "PictureDescription3": "雅聞峇里海岸觀光工廠3"
      },
      "Position": {
        "PositionLon": 120.5696029663086,
        "PositionLat": 23.73004913330078,
        "GeoHash": "wsjwzxuje"
      },
      "Class1": "遊憩類",
      "Class2": "觀光工廠類",
      "ParkingInfo": "備有大客車及小客車專用免費停車場",
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    }
  ]
  
  return (
    <>
    <div className="bg-[#cccccc]">
      <div className="container mx-auto">
          <Navbar fluid rounded className="bg-blue-400">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Hao Bro website</span>
        </NavbarBrand> 
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" className="text-dark">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">活動</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-dark hovor:text-yellow-50 hover:hover-b">交通</NavbarLink>
          <NavbarLink href="#">關於我們</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
      </div>
    </div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/Tower_of_Taipei_101(cropped).jpg" alt="由 AnthonySantiago101 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=113982887" />
        <img src="/31257721794_a7f2e036ab_o.jpg" alt="Copyright by https://www.flickr.com/photos/405mi16/" />
        <img src="/Yuntech_20100910_Cloud_Octagon_0019.jpg" alt="由 Zhuang kuonan - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=65669091" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>

    <div className="container mx-auto grid grid-cols-4 gap-4">
        { items.map( items =>
          <Card className="max-w-sm"
              imgAlt={items.ScenicSpotName}
              imgSrc={items.Picture.PictureUrl1}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {items.ScenicSpotName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {items.DescriptionDetail}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )
        }
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            { items.map( items =>
              <CustomCard item={items}/>
            )}
          </div>
        </div>
        <Footer container >
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>

    </>
    );
}
