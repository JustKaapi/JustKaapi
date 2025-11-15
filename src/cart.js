function cart() {

    const persist = (i) => {
        const entries = JSON.stringify(i);
        localStorage.setItem("G_CART", entries)
    }

    const retrieve = () => {
        let seed = [];
        try {
            const cart = localStorage.getItem("G_CART");
            seed = cart && JSON.parse(cart) || [];
        }
        catch (e) {
            console.log(e.message);
        }

        return seed;
    }

    let seed = retrieve();
    const items = new Map(seed);

    const clear = () => {
        items.clear();
        persist([]);
    };

    const getItems = () => {
        return Array.from(items.entries())
    }

    const add = (id) => {
        const count = items.get(id) || 0;
        items.set(id, count + 1);

        persist(getItems());
    };

    const remove = (id) => {
        const count = items.get(id) || 0;
        if (count == 1) {
            items.delete(id);
        }
        else {
            items.set(id, count - 1);
        }

        persist(getItems());
    };

    return { add, remove, clear, getItems }
}

const G_CART = cart();