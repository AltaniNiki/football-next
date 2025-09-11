import type { TeamStatistics } from "@/types/api-football"

export function transformStatistics(data: TeamStatistics | null) {
    var result = [];

    // push first headers
    result.push({
        id: "headers_row",
        column1: " ",
        column2: "Home",
        column3: "Away",
        column4: "All",
        style: "grayColor",
        cellStyle: 'headerCell'
    })

    // push game played
    result.push({
        id: "games_row",
        column1: "Game played",
        column2: data?.fixtures.played.home,
        column3: data?.fixtures.played.away,
        column4: data?.fixtures.played.total,
        style: null,
        cellStyle: null
    })

    // push wins
    result.push({
        id: "wins_row",
        column1: "Wins",
        column2: data?.fixtures.wins.home,
        column3: data?.fixtures.wins.away,
        column4: data?.fixtures.wins.total,
        style: null,
        cellStyle: null
    })

    // push draws
    result.push({
        id: "draws_row",
        column1: "Draws",
        column2: data?.fixtures.draws.home,
        column3: data?.fixtures.draws.away,
        column4: data?.fixtures.draws.total,
        style: null,
        cellStyle: null
    })


    // push loss
    result.push({
        id: "loses_row",
        column1: "Loses",
        column2: data?.fixtures.loses.home,
        column3: data?.fixtures.loses.away,
        column4: data?.fixtures.loses.total,
        style: null,
        cellStyle: null
    })

    // push goals

    result.push({
        id: "goals_row",
        column1: "Goals",
        column2: "",
        column3: "",
        column4: "",
        style: "grayColor",
        cellStyle: 'headerCell'
    })
    // push goals for
    result.push({
        id: "goalsFor_row",
        column1: "Goals for",
        column2: data?.goals.for.total.home,
        column3: data?.goals.for.total.away,
        column4: data?.goals.for.total.total,
        style: null,
        cellStyle: null
    })

    // push goals against
    result.push({
        id: "goalsAgainst_row",
        column1: "Goals against",
        column2: data?.goals.against.total.home,
        column3: data?.goals.against.total.away,
        column4: data?.goals.against.total.total,
        style: null,
        cellStyle: null
    })
    return result
}