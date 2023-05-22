export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const integrationToken = "secret_B9rnKxdn9rEyDxBk4tbBx6L1JeuNQ0gz1n3X8i7q6rg";
  const database = "2dcfebabf1de40ca979c3f2710b8b332";
  const url = `https://api.notion.com/v1/databases/${database}/query`;
  // generate today in formt yyyy-mm-dd
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  // nada a ver
  const body = {
    sorts: [
      {
        property: "Data",
        direction: "ascending",
      },
    ],
  };
  const response: { results: any[] } = await $fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${integrationToken}`,
    },
    body: JSON.stringify(body),
  });

  const info = response.results[0].properties;
  const result = {  
    title: info.Title.title[0].plain_text,
    url: info.URL.url,
    date: info.Data.date.start,
    file: info.File.files[0].file.url,
    en: info.en.rich_text[0].plain_text,
    pt: info.pt.rich_text[0].plain_text,
  };

  return result;
});
