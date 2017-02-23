<script type="text/javascript" charset="utf-8">
                                                d3.text("voca2.csv", function(data) {
                                                    var parsedCSV = d3.csv.parseRows(data);

                                                    var container = d3.select("body")
                                                                        .append("table")

                                                                        .selectAll("tr")
                                                                            .data(parsedCSV).enter()
                                                                            .append("tr")

                                                                        .selectAll("td")
                                                                            .data(function(d) { return d; }).enter()
                                                                            .append("td")
                                                                            .text(function(d) { return d; });
                                                });
                                            </script>