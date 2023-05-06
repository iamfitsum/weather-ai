import { getClient } from "@/apollo-client"
import CalloutCard from "@/components/CalloutCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

async function WeatherPage({params: {city, lat, long}}: Props) {
    const client = getClient();
    const { data, loading, error } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: "true",
            latitude: lat,
            longitude: long,
            timezone: "GMT"
        }
    });

    const results: Root = data.myQuery;
    console.log(results);
  return (
    <div>
      {/* <InformationPanel/> */}
      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today&apos;s Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated At:{" "}
              {new Date(results.current_weather.time).toLocaleTimeString()}{" "}
              {results.timezone}
            </p>
          </div>

          <div>
            <CalloutCard message="Hi, I’ll be here until ChatGPT comes." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage