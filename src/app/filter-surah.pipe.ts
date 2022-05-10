import { Pipe, PipeTransform } from "@angular/core";
import { Surah } from "src/models/surah.model";

@Pipe({
  name: "filterSurah",
  pure: false,
})
export class FilterSurahPipe implements PipeTransform {
  transform(surahs: Surah[], search: string): Surah[] {
    const _search = search.trim();
    if (_search === "") return surahs;

    const filterSurah = surahs.filter((surah) =>
      surah.transliteration_en.toLowerCase().includes(search.toLowerCase())
    );
    return filterSurah;
  }
}
