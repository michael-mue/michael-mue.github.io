import fs from "fs";
import bibtexParse from "bibtex-parse-js";

// Basic LaTeX accent replacement for umlauts and common characters
function decodeLatex(str = "") {
  return str
    .replace(/\\\"{u}/g, "ü")
    .replace(/\\\"u/g, "ü")
    .replace(/\\\"{o}/g, "ö")
    .replace(/\\\"o/g, "ö")
    .replace(/\\\"{a}/g, "ä")
    .replace(/\\\"a/g, "ä")
    .replace(/\\\"{U}/g, "Ü")
    .replace(/\\\"U/g, "Ü")
    .replace(/\\\"{O}/g, "Ö")
    .replace(/\\\"O/g, "Ö")
    .replace(/\\\"{A}/g, "Ä")
    .replace(/\\\"A/g, "Ä")
    .replace(/\\\'{e}/g, "é")
    .replace(/\\\'e/g, "é")
    .replace(/\\\&/g, "&")
    .replace(/\\ss/g, "ß");
}

function entryToBibTeX(entry) {
  const tags = entry.entryTags;
  const tagStrings = Object.entries(tags)
    .map(([key, value]) => `  ${key} = {${value}}`)
    .join(",\n");
  return `@${entry.entryType}{${entry.citationKey},\n${tagStrings}\n}`;
}

const bibRaw = fs.readFileSync(new URL("./publications.bib", import.meta.url));
const entries = bibtexParse.toJSON(String(bibRaw));

export default entries.map((entry) => {
  const tags = entry.entryTags;
  const venueParts = [
    tags.booktitle,
    tags.series,
    tags.location,
    tags.publisher,
  ].filter(Boolean).map(decodeLatex);
  const venue = venueParts.join(", ");

  // Build URL from DOI if available
  let link = "";
  if (tags.doi) {
    link = `https://doi.org/${tags.doi}`;
  } else if (tags.url) {
    link = tags.url;
  }

  return {
    id: entry.citationKey,
    title: decodeLatex(tags.title || ""),
    authors: decodeLatex(tags.author || ""),
    year: tags.year || "",
    venue,
    publisher: decodeLatex(tags.publisher || ""),
    location: decodeLatex(tags.location || ""),
    series: decodeLatex(tags.series || ""),
    pages: decodeLatex(tags.pages || ""),
    doi: tags.doi || "",
    link,
    pdf: tags.pdf || "",
    cite: entryToBibTeX(entry),
  };
});
