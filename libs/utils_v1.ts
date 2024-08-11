export const defaultOrders = ["index.html", "*.md", "**/{*,.*,*.*}", "*.html", "*.page.*", "*.*", "*.json", "{.*, *.config.*}"]
export const sortPath = (paths: string[], orders: string[], sortBy?: number) => {
    sortBy ??= 1;
    orders = orders.reverse();

    /**
     * 3 conditions:
     * 1. both is root file
     * 2. first is root file, and second is folder
     * 3. both is folder on the same level; and the same path to the end
     * 4. both is folder but not on the same level; and the same path to the shorter
     */

    paths.sort((b, a) => {
        const a_islash = a.lastIndexOf("/"),
            b_islash = b.lastIndexOf("/");

        if (a_islash > -1 && b_islash > -1)
            if (a_islash != b_islash) return b.localeCompare(a) * sortBy;
            else { // a_islash == b_islash
                a = a.slice(a_islash + 1);
                b = b.slice(b_islash + 1);
            }

        let a_isort = Infinity,
            b_isort = Infinity;
        console.log(a_isort);
        return 1;
    });
}
