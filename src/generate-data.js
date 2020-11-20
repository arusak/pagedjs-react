const tableData = Array(30).fill(0).map((v, idx) => ({
    id: idx,
    text: 'Value #' + idx,
    value: Math.random() * 1000000
}));

let counters = [0, 0, 0];
const widgets = Array(100).fill(0).map((v, idx) => {
        let type = 'long_table';
        let rnd = Math.random() * 3;
        if (rnd < 1) {
            type = 'short_table';
        } else if (rnd < 2) {
            type = 'chart';
        }
        switch (type) {
            case 'long_table': {
                let start = Math.random() * 10;
                let end = start + Math.random() * 90;
                return {
                    type,
                    title: 'Long Table Widget #' + ++counters[0],
                    data: tableData.slice(start, end)
                };
            }
            case 'short_table': {
                let start = Math.random() * 50;
                let end = start + Math.random() * 7 + 3;
                return {
                    type,
                    title: 'Short Table Widget #' + ++counters[1],
                    data: tableData.slice(start, end),
                };
            }
            case 'chart': {
                return {
                    type,
                    title: 'Chart Widget #' + ++counters[2],
                    data: []
                };
            }
        }
    }
);

export {
    widgets
};
