export default async function handler(
  request,
  response,
) {
  const result = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/Kyiv',
  );
  const data = await result.json();

  const successInfo= { datetime: data.datetime, info: "It works, execution by cron" }
  console.log(successInfo)
  return response.json(successInfo);
}
