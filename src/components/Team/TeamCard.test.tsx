import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TeamCard from "./TeamCard"


describe('testing teamCard component', () => {
    beforeEach(() => {
        render(
            <TeamCard
                name="AEK F.C"
                national="Greece"
                logo="https://media.api-sports.io/football/teams/75.png"
                venue="Opap Arena"
                venueCapacity={30000}
            />
        )
    })


    it("check if render the props", () => {
        expect(screen.getByText('AEK F.C')).toBeInTheDocument()
        expect(screen.getByText(/Opap Arena/i)).toBeInTheDocument();
        expect(screen.getByText(/\(Greece\)/i)).toBeInTheDocument();
        expect(screen.getByText('30000')).toBeInTheDocument()
    })
})