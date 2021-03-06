function buildPlot() {
    // let d3;
    // let Plotly;

    /* data route */
    const url = "/api/pals";
    d3.json(url).then(function(response) {

        console.log(response);

        const data = response;

        const layout = {
            scope: "usa",
            title: "Pet Pals",
            showlegend: false,
            height: 600,

            geo: {
                scope: "usa",
                projection: {
                    type: "albers usa"
                },
                showland: true,
                landcolor: "rgb(217, 217, 217)",
                subunitwidth: 1,
                countrywidth: 1,
                subunitcolor: "rgb(255,255,255)",
                countrycolor: "rgb(255,255,255)"
            }
        };

        Plotly.newPlot("plot", data, layout);
    });
}

alert("test");
buildPlot();