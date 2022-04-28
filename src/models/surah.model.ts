export class Surah {
    constructor(
        public number: number,
        public name: string,
        public transliteration_en: string,
        public translation_en: string,
        public total_verses: number,
        public revelation_type: string,
    ) {}
}
