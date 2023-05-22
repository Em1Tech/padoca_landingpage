export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const integrationToken = "secret_B9rnKxdn9rEyDxBk4tbBx6L1JeuNQ0gz1n3X8i7q6rg";
  const database = "b7ee72547c45494e9915ca9f8220f707";
  const url = `https://api.notion.com/v1/databases/${database}/query`;
  // generate today in formt yyyy-mm-dd
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  // nada a ver
  const body = {
    filter: {
      and: [
        {
          property: "Date",
          date: {
            on_or_after: todayDate,
          },
        },
        {
          property: "Pronto",
          checkbox: {
            equals: true,
          },
        }
      ],
    },

    sorts: [
      {
        property: "Date",
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

  const data = response.results.map((item) => {
    return item.properties;
  });
  const info = data.map((item) => {
    return {
      title: item.Title.title[0].plain_text,
      local: item.Local.rich_text[0].plain_text,
      url: item.URL.url,
      dateStart: item.Date?.date?.start,
      dateEnd: item.Date?.date?.end,
      file: item.File.files[0]?.file?.url,
    };
  });

  return info;
});
