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
        case "active" || "Active":
            return "#E3BA22"
        case "critical":
            return "#137B80"
        case "deaths" || "Deaths":
            // return "#BA5F06"
            return "#E6842A"
        case "recovered" || "Recovered":
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
        case "Confirmed":   
            return "#BD2D28"
        case "Active":   
            return "#E3BA22"
        case "Recovered":  
           return "#A0B700"
        case "Deaths":   
            return "#BA5F06"
        default:
            return "#BD2D28"
    }
}