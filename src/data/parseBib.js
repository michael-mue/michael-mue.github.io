import fs from "fs";
import bibtexParse from "bibtex-parse-js";

const bibRaw = fs.readFileSync(new URL("./publications.bib", import.meta.url));
const entries = bibtexParse.toJSON(String(bibRaw));

export default entries.map((entry) => {
  const tags = entry.entryTags;
  return {
    id: entry.citationKey,
    title: tags.title || "",
    authors: tags.author || "",
    year: tags.year || "",
    venue: tags.booktitle || "",
    publisher: tags.publisher || "",
    location: tags.location || "",
    series: tags.series || "",
    pages: tags.pages || "",
    doi: tags.doi || "",
    link: tags.url || "",
    pdf: tags.pdf || "",
    cite: entry.citation || "", // You may want to generate this as a BibTeX string
  };
});
