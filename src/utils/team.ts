export function transformStatistics(data: object) {
    var result = [];

    // push first headers
    result.push({
        column1: " ",
        column2: "Home",
        column3: "Away",
        column4: "All",
        style: "gray-row"
    })

    // push game played
    result.push({
        column1: "Game played",
        column2: data.fixtures.played.home,
        column3: data.fixtures.played.away,
        column4: data.fixtures.played.total,
        style: null
    })

    // push wins
    result.push({
        column1: "Wins",
        column2: data.fixtures.wins.home,
        column3: data.fixtures.wins.away,
        column4: data.fixtures.wins.total,
        style: null
    })

    // push draws
    result.push({
        column1: "Draws",
        column2: data.fixtures.draws.home,
        column3: data.fixtures.draws.away,
        column4: data.fixtures.draws.total,
        style: null
    })


    // push loss
    result.push({
        column1: "Loses",
        column2: data.fixtures.loses.home,
        column3: data.fixtures.loses.away,
        column4: data.fixtures.loses.total,
        style: null
    })

    // push goals

    result.push({
        column1: "Goals",
        column2: "",
        column3: "",
        column4: "",
        style: "gray-row"
    })
    // push goals for
    result.push({
        column1: "Goals for",
        column2: data.goals.for.total.home,
        column3: data.goals.for.total.away,
        column4: data.goals.for.total.total,
        style: "gray-row"
    })

    // push goals against
    result.push({
        column1: "Goals for",
        column2: data.goals.against.total.home,
        column3: data.goals.against.total.away,
        column4: data.goals.against.total.total,
        style: "gray-row"
    })
    return result
}