import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LeagueCard from "./LeagueCard";


describe('testing leaguecard component', () => {

    beforeEach(() => {
        render(<LeagueCard
            name="Premier League"
            logo="https://media.api-sports.io/football/leagues/39.png"
            country="England"
            flag="https://media.api-sports.io/flags/gb-eng.svg"
        />);
    })
    it('renders league name & country', () => {
        expect(screen.getByText('Premier League')).toBeInTheDocument()
        expect(screen.getByText('England')).toBeInTheDocument()
    })
})
