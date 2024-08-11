import mm from "micromatch"

export const findLongestMatchPaths_testCase = [
    "abcde.txt",    // 0
    "dir1/dir2/abcde.txt",  // 1
    "dir5/dir6/abcde.txt",  // 2
    "dir1/dir6/dir7/abcde.txt",    // 3
    "dir1/dir2/dir3/dir4/abcde.txt",    // 4 -> primary
    "/dir1/dir2/dir3/dir4/abcde.txt",   // 5
    "dir1/dir2/dir3/dir4/fghij.txt",    // 6
    "dir1/dir2/dir7/dir8/fghij.txt",    // 7
    "/dir1/dir2/dir7/dir8/fghij.txt",    // 8
    "dir12/dir13/dir14/dir15/abcde.txt", // 9
];
// var a = findLongestMatchPaths_testCase;
// var min = findLongestMatchPaths(a[4], a[1]);
// console.log(min, a[4].slice(0, min + 1))

// function findLongestMatchPaths(a, b) {
export function findLongestMatchPaths(a: string, b: string) {
    let a_islash = Infinity,
        b_islash = Infinity,
        min = Infinity;

    while (a_islash > -1 && b_islash > -1) {
        a_islash = a.lastIndexOf("/");
        b_islash = b.lastIndexOf("/");
        min = Math.min(a_islash, b_islash);

        a = a.slice(0, min < 0 ? 0 : min); // should not get slice(0, -1) because it implement slice(0, len - 1)
        b = b.slice(0, min < 0 ? 0 : min); // if min+1 would include the last '/', we don't want that
        if (a == b) break;
    }

    return min;
}

export const defaultOrders = ["index.html", "*.md", "**/{*,.*,*.*}", "*.html", "*.page.*", "*.*", "*.json", "{.*, *.config.*}"]
export const sortPath = (paths: string[], orders: string[], sortBy?: number) => {
    sortBy ??= 1;

    /**
     * 3 conditions:
     * 1. both is root file
     * 2. first is root file, and second is folder
     * 3. both is folder on the same level; and the same path to the end
     *
     */

    paths.sort((b, a) => {
        const islash = findLongestMatchPaths(a, b);
        const mmopts: mm.Options = {
            basename: true,
            nocase: false,
        };

        if (islash >= 0) {
            a = a.slice(islash + 1);
            b = b.slice(islash + 1);
        }

        // 4. both is folder but not on the same road ~; and the same path to the shorter~
        if (a.lastIndexOf("/") > 0 && b.lastIndexOf("/") > 0)
            return b.localeCompare(a) * sortBy;

        let a_isort = -1,
            b_isort = -1;

        for (let i = orders.length - 1; i > -1; i--) {
            // mm.isMatch and i would not on -1
            if (mm.isMatch(a, orders[i]!, mmopts) && (a_isort == -1 || i < a_isort)) a_isort = i;
            if (mm.isMatch(b, orders[i]!, mmopts) && (b_isort == -1 || i < b_isort)) b_isort = i;
        }

        return 1;
    });
}
