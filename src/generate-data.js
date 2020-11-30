const NUMBER_OF_WIDGETS = 10;

const tableData = Array(100).fill(0).map((v, idx) => ({
    id: (idx + 1),
    text: 'Value #' + (idx + 1),
    value: Math.random() * 1000000
}));

let counters = [0, 0, 0];

const widgets = Array(NUMBER_OF_WIDGETS).fill(0).map(() => {
        let type = 'long_table';
        let rnd = Math.random() * 3;
        if (rnd < 1) {
            type = 'short_table';
        } else if (rnd < 2) {
            type = 'chart';
        }
        switch (type) {
            case 'long_table': {
                let start = 0;
                let end = 1 + Math.random() * 99;
                return {
                    type,
                    title: 'Long Table Widget #' + ++counters[0],
                    data: tableData.slice(start, end)
                };
            }
            case 'short_table': {
                let start = 0;
                let end = start + 1 + Math.random() * 9;
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
