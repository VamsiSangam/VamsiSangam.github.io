$(function () {
    /* Morris.js Charts */

//-------------
//- PIE CHART -
//-------------
// Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas);
    var PieData = [
        {
            value: 700,
            color: "#f56954",
            highlight: "#f56954",
            label: "Chrome"
        },
        {
            value: 500,
            color: "#00a65a",
            highlight: "#00a65a",
            label: "IE"
        },
        {
            value: 400,
            color: "#f39c12",
            highlight: "#f39c12",
            label: "FireFox"
        },
        {
            value: 600,
            color: "#00c0ef",
            highlight: "#00c0ef",
            label: "Safari"
        },
        {
            value: 300,
            color: "#3c8dbc",
            highlight: "#3c8dbc",
            label: "Opera"
        },
        {
            value: 100,
            color: "#d2d6de",
            highlight: "#d2d6de",
            label: "Navigator"
        }
    ];
    var pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 1,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: false,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        //String - A tooltip template
        tooltipTemplate: "<%=value %> <%=label%> users"
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    pieChart.Doughnut(PieData, pieOptions);
    //-----------------
    //- END PIE CHART -
    //-----------------

    /* jVector Maps
     * ------------
     * Create a world map with markers
     */

    var viewsData = {
        "AD": 630,
        "AE": 902,
        "AF": 264,
        "AG": 606,
        "AI": 494,
        "AL": 736,
        "AM": 579,
        "AO": 926,
        "AQ": 112,
        "AR": 302,
        "AS": 984,
        "AT": 347,
        "AU": 983,
        "AW": 822,
        "AX": 220,
        "AZ": 617,
        "BA": 399,
        "BB": 59,
        "BD": 463,
        "BE": 75,
        "BF": 296,
        "BG": 950,
        "BH": 321,
        "BI": 207,
        "BJ": 952,
        "BL": 564,
        "BM": 715,
        "BN": 993,
        "BO": 55,
        "BQ": 688,
        "BR": 99,
        "BS": 85,
        "BT": 744,
        "BV": 88,
        "BW": 256,
        "BY": 823,
        "BZ": 207,
        "CA": 381,
        "CC": 689,
        "CD": 8,
        "CF": 318,
        "CG": 392,
        "CH": 712,
        "CI": 709,
        "CK": 843,
        "CL": 815,
        "CM": 871,
        "CN": 522,
        "CO": 974,
        "CR": 683,
        "CU": 968,
        "CV": 689,
        "CW": 200,
        "CX": 952,
        "CY": 390,
        "CZ": 581,
        "DE": 391,
        "DJ": 4,
        "DK": 68,
        "DM": 452,
        "DO": 827,
        "DZ": 75,
        "EC": 15,
        "EE": 12,
        "EG": 233,
        "EH": 693,
        "ER": 494,
        "ES": 252,
        "ET": 62,
        "FI": 857,
        "FJ": 369,
        "FK": 386,
        "FM": 138,
        "FO": 132,
        "FR": 173,
        "GA": 284,
        "GB": 54,
        "GD": 669,
        "GE": 580,
        "GF": 638,
        "GG": 276,
        "GH": 830,
        "GI": 38,
        "GL": 42,
        "GM": 714,
        "GN": 43,
        "GP": 405,
        "GQ": 776,
        "GR": 560,
        "GS": 826,
        "GT": 502,
        "GU": 775,
        "GW": 624,
        "GY": 434,
        "HK": 245,
        "HM": 920,
        "HN": 369,
        "HR": 33,
        "HT": 111,
        "HU": 982,
        "ID": 43,
        "IE": 52,
        "IL": 425,
        "IM": 952,
        "IN": 695,
        "IO": 530,
        "IQ": 619,
        "IR": 341,
        "IS": 78,
        "IT": 782,
        "JE": 642,
        "JM": 989,
        "JO": 79,
        "JP": 781,
        "KE": 964,
        "KG": 549,
        "KH": 59,
        "KI": 393,
        "KM": 766,
        "KN": 689,
        "KP": 548,
        "KR": 727,
        "KW": 221,
        "KY": 126,
        "KZ": 324,
        "LA": 468,
        "LB": 465,
        "LC": 653,
        "LI": 438,
        "LK": 752,
        "LR": 527,
        "LS": 552,
        "LT": 762,
        "LU": 342,
        "LV": 909,
        "LY": 64,
        "MA": 67,
        "MC": 710,
        "MD": 875,
        "ME": 454,
        "MF": 519,
        "MG": 726,
        "MH": 765,
        "MK": 444,
        "ML": 648,
        "MM": 817,
        "MN": 731,
        "MO": 948,
        "MP": 78,
        "MQ": 760,
        "MR": 736,
        "MS": 440,
        "MT": 466,
        "MU": 378,
        "MV": 416,
        "MW": 698,
        "MX": 965,
        "MY": 591,
        "MZ": 811,
        "NA": 251,
        "NC": 400,
        "NE": 102,
        "NF": 474,
        "NG": 64,
        "NI": 941,
        "NL": 493,
        "NO": 139,
        "NP": 781,
        "NR": 727,
        "NU": 741,
        "NZ": 978,
        "OM": 786,
        "PA": 557,
        "PE": 483,
        "PF": 729,
        "PG": 382,
        "PH": 451,
        "PK": 182,
        "PL": 795,
        "PM": 248,
        "PN": 868,
        "PR": 341,
        "PS": 796,
        "PT": 167,
        "PW": 870,
        "PY": 722,
        "QA": 532,
        "RE": 513,
        "RO": 767,
        "RS": 217,
        "RU": 640,
        "RW": 217,
        "SA": 708,
        "SB": 63,
        "SC": 279,
        "SD": 976,
        "SE": 601,
        "SG": 101,
        "SH": 830,
        "SI": 404,
        "SJ": 924,
        "SK": 644,
        "SL": 121,
        "SM": 46,
        "SN": 322,
        "SO": 376,
        "SR": 233,
        "SS": 111,
        "ST": 891,
        "SV": 179,
        "SX": 837,
        "SY": 835,
        "SZ": 231,
        "TC": 421,
        "TD": 220,
        "TF": 59,
        "TG": 998,
        "TH": 266,
        "TJ": 961,
        "TK": 780,
        "TL": 210,
        "TM": 312,
        "TN": 809,
        "TO": 942,
        "TR": 784,
        "TT": 79,
        "TV": 238,
        "TW": 952,
        "ISO": 76,
        "TZ": 595,
        "UA": 328,
        "UG": 721,
        "UM": 946,
        "US": 694,
        "UY": 963,
        "UZ": 885,
        "VA": 6,
        "VC": 56,
        "VE": 751,
        "VG": 547,
        "VI": 328,
        "VN": 153,
        "VU": 590,
        "WF": 467,
        "WS": 230,
        "YE": 832,
        "YT": 446,
        "ZA": 608,
        "ZM": 11,
        "ZW": 56
    };
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        series: {
            regions: [{
                    values: viewsData,
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
        },
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: 'rgba(210, 214, 222, 1)',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.7,
                cursor: 'pointer'
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {
            }
        },
        onRegionLabelShow: function (event, label, code) {
            label.html(label.html() + ' - ' + viewsData[code]);
        }

    });
});
