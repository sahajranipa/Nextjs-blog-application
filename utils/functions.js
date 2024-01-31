export default function decodeHtmlEntities(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.innerText;
}
