import mm from "micromatch"

export const findLongestMatchPaths_testCase = [
    "abcde.txt",    // 0
    "dir1/dir2/abcde.txt",  // 1
    "dir5/dir6/abcde.txt",  // 2
    "dir1/dir6/dir7/abcde.txt",    // 3
    "dir1/dir2/dir3/dir4/abcde.txt",    // 4 -> primary
    "/dir1/dir2/dir3/dir4/abcde.txt",   // 5 -> not expected
    "dir1/dir2/dir3/dir4/fghij.txt",    // 6
    "dir1/dir2/dir7/dir8/fghij.txt",    // 7
    "/dir1/dir2/dir7/dir8/fghij.txt",    // 8 -> not expected
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

export const _SKIP = Symbol("SKIP");
export const _DIR = Symbol("DIR")
export const defaultOrders = ["index.html", "readme.md", "*.md", "*/", ".*/", "*.html", "*.page.*", "*.json", "{.*, *.config.*}"]
export const sortPath = (paths: string[], orders: string[]) => {
    const mmopts: mm.Options = {
        // basename: true,
        nocase: true,
        // matchBase: true,
        dot: true,
    };

    return paths.sort((b, a) => {
        const islash = findLongestMatchPaths(a, b);

        if (islash >= 0) {
            a = a.slice(islash + 1);
            b = b.slice(islash + 1);
        }

        // get first slash directory
        const a_islash = a.indexOf("/"),
              b_islash = b.indexOf("/");
        a = a.slice(0, a_islash > -1 ? a_islash + 1: undefined);
        b = b.slice(0, b_islash > -1 ? b_islash + 1 : undefined);

        // see below why not -1, but Infinity
        let a_isort = Infinity,
            b_isort = Infinity;

        // from back to front
        for (let i = orders.length - 1; i > -1; i--) {
        // // from front to back
        // for (let i = 0; i < orders.length; i++) {
            // mm.isMatch and i would not on -1
            if (mm.isMatch(a, orders[i]!, mmopts) && a_isort == Infinity) a_isort = i;
            if (mm.isMatch(b, orders[i]!, mmopts) && b_isort == Infinity) b_isort = i;
            if (a_isort != Infinity && b_isort != Infinity) break;
        }

        if (a_isort == b_isort) return b.localeCompare(a);

        // [1, 2] -> 2-1= 1 -> [1, 2]       // expected
        // [3, 2] -> 2-3=-1 -> [2, 3]       // expected
        // [-1, 2] -> [-1, 2]               // no item; not expected
        // [Ininifty, 2] -> 2 - Infinity = -Infinity -> [2, Infinity]   // expected
        return b_isort - a_isort;
    });
}

export type StructDir = {
    name: string;
    _list: Record<string, StructDir>;
    list: (StructDir | string)[];
};

export const restructor = (paths: string[]) => {
    const root: StructDir = {
        name: "root",
        _list: {},
        list: [],
    };

    for (const fullpath of paths) {
        const dirs = fullpath.split("/");

        let _list = root._list;
        let list = root.list;
        for (const [ideep, dir] of Object.entries(dirs)) {
            if (parseInt(ideep) == dirs.length - 1) {
                list.push(dir);
            } else {
                if (!_list[dir]) {
                    _list[dir] = {
                        name: dir,
                        _list: {},
                        list: [],
                    };
                    list.push(_list![dir]);
                }
                list = _list[dir].list;
                _list = _list[dir]._list;
            }
        }
    }

    return root;
}
