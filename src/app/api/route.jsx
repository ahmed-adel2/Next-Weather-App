const url = `http://api.weatherapi.com/v1/current.json?key=${"b4e9b747514044b3bb9200659230908"}&q=${""}=bulk`;
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
};
export async function GET(request) {
    const response = await fetch(url,options);
    const data = await response.json()

    if(!data) {
        return new Response(JSON.stringify("it failed to work"))
    } else {
        return new Response(JSON.stringify(data))
    }
}