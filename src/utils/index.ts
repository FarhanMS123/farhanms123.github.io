export default function normRE(re_text: string) {
    return re_text // \/=!.,|?*^-+(){}[]
        .replaceAll("\\", "\\\\").replaceAll("/", "\\/").replaceAll("=", "\\=").replaceAll("!", "\\!")
        .replaceAll(".", "\\.").replaceAll(",", "\\,").replaceAll("|", "\\|").replaceAll("?", "\\?")
        .replaceAll("*", "\\*").replaceAll("^", "\\^").replaceAll("-", "\\-").replaceAll("+", "\\+")
        .replaceAll("(", "\\(").replaceAll(")", "\\)").replaceAll("{", "\\{").replaceAll("}", "\\}")
        .replaceAll("[", "\\[").replaceAll("]", "\\]");
}