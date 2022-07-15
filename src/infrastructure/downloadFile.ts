export function downloadFile({
  name,
  urlData,
}: {
  name: string;
  urlData: any;
}) {
  const aLink = document.createElement("a");
  const evt = document.createEvent("HTMLEvents");
  evt.initEvent("click");
  aLink.download = name;
  aLink.href = urlData;
  aLink.dispatchEvent(evt);
  aLink.click();
}

function generateFilename({
  prefix = "",
  ext,
}: {
  prefix?: string;
  ext: string;
}) {
  return `${prefix}${Date.now()}.${ext}`;
}
export function downloadCSVFile({
  name = generateFilename({ ext: "csv" }),
  data,
}: {
  name?: string;
  data: any;
}) {
  return downloadFile({
    name,
    urlData: "data:text/csv;charset=UTF-8," + encodeURIComponent(data),
  });
}

// const { payload } = await this.http.get(`/marketplace/sales/report/detailed/csv`)
// downloadFile('2.csv', 'data:text/csv;charset=UTF-8,' + encodeURIComponent(payload.data));
