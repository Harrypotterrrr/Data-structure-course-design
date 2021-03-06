var links = [];
var nodes = [];

var width = 800,
    height = 500;

var force, svg;
var edges_line,edges_text,circle,text;

function update() {


    force = d3.layout.force()               //layout将json格式转化为力学图可用的格式
    .nodes(d3.values(nodes))                //设定节点数组
    .links(links)                           //设定连线数组
    .size([width, height])                  //作用域的大小
    .linkDistance(180)                      //连接线长度
    .charge(-1500)                          //顶点的电荷数。该参数决定是排斥还是吸引，数值越小越互相排斥
    .on("tick", tick)                       //指时间间隔，隔一段时间刷新一次画面
    .start();                               //开始转换

    svg = d3.select("#force").append("svg")
            .attr("width", width)
            .attr("height", height);

//设置连接线
    edges_line = svg.selectAll(".edgepath")
        .data(force.links())
        .enter()
        .append("path")
        .attr({
            'd': function (d) {
                return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y
            },
            'class': 'edgepath',
            'id': function (d, i) {
                return 'edgepath' + i;
            }
        })
        .style("stroke", function (d) {
            var lineColor;
            //根据关系的不同设置线条颜色
            lineColor = "#ffbc19";
            return lineColor;
        })
        .style("pointer-events", "none")
        .style("stroke-width", 0.9)//线条粗细
        .attr("marker-end", "url(#resolved)");//根据箭头标记的id号标记箭头

    edges_text = svg.append("g").selectAll(".edgelabel")
        .data(force.links())
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr({
            'class': 'edgelabel',
            'id': function (d, i) {
                return 'edgepath' + i;
            },
            'dx': 80,
            'dy': 0
        });

//设置线条上的文字
    edges_text.append('textPath')
        .attr('xlink:href', function (d, i) {
            return '#edgepath' + i
        })
        .style("pointer-events", "none")
        .text(function (d) {
            return d.rela;
        });

//圆圈
    circle = svg.append("g").selectAll("circle")
        .data(force.nodes())//表示使用force.nodes数据
        .enter().append("circle")
        .style("fill", function (node) {
            var color;//圆圈背景色
            var link = links[node.index];
            if (node.name === link.source.name && link.rela === "主营产品") {
                color = "#ffffff";
            } else {
                color = "#ffffff";
            }
            return color;
        })
        .style('stroke', function (node) {
            var color;//圆圈线条的颜色
            var link = links[node.index];
            color = "#ff0000";
            return color;
        })
        .attr("r", 28)//设置圆圈半径
        .on("click", function (node) {
            //单击时让连接线加粗
            edges_line.style("stroke-width", function (line) {
                console.log(line);
                if (line.source.name === node.name || line.target.name === node.name) {
                    return 4;
                } else {
                    return 0.9;
                }
            });
            //d3.select(this).style('stroke-width',2);
        })
        .call(force.drag);//将当前选中的元素传到drag函数中，使顶点可以被拖动

//圆圈的提示文字
    circle.append("svg:title")
        .text(function (node) {
            var link = links[node.index];
            if (node.name === link.source.name && link.rela === "主营产品") {
                return "双击可查看详情"
            }
        });

    text = svg.append("g").selectAll("text")
        .data(force.nodes())
        //返回缺失元素的占位对象（placeholder），指向绑定的数据中比选定元素集多出的一部分元素。
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")//在圆圈中加上数据
        .style('fill', function (node) {
            var color;//文字颜色
            var link = links[node.index];
            color = "#ff643f";
            return color;
        }).attr('x', function (d) {
            // console.log(d.name+"---"+ d.name.length);
            var re_en = /[a-zA-Z]+/g;
            //如果是全英文，不换行
            if (d.name.match(re_en)) {
                d3.select(this).append('tspan')
                    .attr('x', 0)
                    .attr('y', 2)
                    .text(function () {
                        return d.name;
                    });
            }
            //如果小于四个字符，不换行
            else if (d.name.length <= 4) {
                d3.select(this).append('tspan')
                    .attr('x', 0)
                    .attr('y', 2)
                    .text(function () {
                        return d.name;
                    });
            } else {
                var top = d.name.substring(0, 4);
                var bot = d.name.substring(4, d.name.length);

                d3.select(this).text(function () {
                    return '';
                });

                d3.select(this).append('tspan')
                    .attr('x', 0)
                    .attr('y', -7)
                    .text(function () {
                        return top;
                    });

                d3.select(this).append('tspan')
                    .attr('x', 0)
                    .attr('y', 10)
                    .text(function () {
                        return bot;
                    });
            }

        });



    function tick() {
        circle.attr("transform", transform1);//圆圈
        text.attr("transform", transform2);//顶点文字

        edges_line.attr('d', function (d) {
            var path = 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
            return path;
        });

        edges_text.attr('transform', function (d, i) {
            if (d.target.x < d.source.x) {
                bbox = this.getBBox();
                rx = bbox.x + bbox.width / 2;
                ry = bbox.y + bbox.height / 2;
                return 'rotate(180 ' + rx + ' ' + ry + ')';
            }
            else {
                return 'rotate(0)';
            }
        });
    }

//设置连接线的坐标,使用椭圆弧路径段双向编码
    function linkArc(d) {
        return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y
    }

//设置圆圈和文字的坐标
    function transform1(d) {
        return "translate(" + d.x + "," + d.y + ")";
    }

    function transform2(d) {
        return "translate(" + (d.x) + "," + d.y + ")";
    }

}