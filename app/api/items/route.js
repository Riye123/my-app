export async function GET(){
    //1.get access token
    const token = await getToken();
    console.log(token);
    //2. data from TDX api
    if(token){
        const apiData = await fetchData(token);
        return Response.json(apiData);
    }else{
        return Response.json(
            {error: "Failed to retrieve access token"},
            {status: 401}
        );
    };

    //return Response.json(apiData);
}
async function getToken() {
    const authURL = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const Params = new URLSearchParams();
    Params.append('grant_type','client_credentials');
    Params.append('client_id',process.env.TDX_CLIENT_ID);
    Params.append('client_secret',process.env.TDX_CLIENT_SECRET);
    

    try {
        const response = await fetch(authURL,{
            method: 'POST',
            headers: {
                "content-type": 'application/x-www-form-urlencoded',

            },
            body: Params,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            console.log(data.access_token);
            return data.access_token;
        } else{
            console.error("Error fetching token:",response.status);
        }
    } catch (error) {
        console.log('Error fetching token:',error);
    }

} 
async function fetchData(token) {
    const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';

    try {
        const response = await fetch(apiUrl,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json',

            },
        });

        if(response.ok) {
            const data = await response.json();
                console.log(JSON.stringify(data));
                return data;
        }else{
            console.error('Error fecthing data : ',response.status);
        }
    }catch (error){
        console.error('Error fection data:',error);
    }
    return null;
}