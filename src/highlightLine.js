function highlightLine(hl) {

    var tmp_list = hl, t;

    edges_line.style("stroke-width", function (line) {

        let one = parseInt(line.source.name);
        let another = parseInt(line.target.name);
        for (let i = 0; i < tmp_list.length; i++) {
            if (one === tmp_list[i].from && another === tmp_list[i].to)
                return 5.0;
            if (one === tmp_list[i].to && another === tmp_list[i].from)
                return 5.0;
        }
        return 0.9;
    });
}