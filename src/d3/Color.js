export const color = (caseType) => {
    switch (caseType) {
        case "population":
            return "#B396AD"
        case "todayCases":
            return "#B37055"
        case "todayDeaths":
            return "#F6B656"  
        case "cases":
            return "#BD2D28"
        case "active":
            return "#E3BA22"
        case "critical":
            return "#137B80"
        case "deaths":
            return "#BA5F06"
        case "recovered":
            return "#A0B700"
        case "tests":
            return "#684664"
        case "casesPerOneMillion":
            return "#9A3E25"
        case "activePerOneMillion":
            return "#F2DA57"
        case "criticalPerOneMillion":
            return "#42A5B3"
        case "deathsPerOneMillion":
            return "#E6842A"
        case "recoveredPerOneMillion":
            return "#5C8100"
        case "testsPerOneMillion":
            return "#8E6C8A"          
    }
}