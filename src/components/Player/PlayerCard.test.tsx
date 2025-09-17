import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import PlayerCard from "./PlayerCard"

describe('testing playerCard component', () => {
    beforeEach(() => {
        render(<PlayerCard
            name="S. Ortega"
            photo="https://media.api-sports.io/football/players/25004.png"
            age={26}
            nationality="Greece"
            birth="1996-03-19"
            height="164cm"
            weight="60kg"
            position="middle"
        />)
    })


    it('check if render the props', () => {
        expect(screen.getByText('S. Ortega')).toBeInTheDocument()
        expect(screen.getByText('Greece')).toBeInTheDocument()
        expect(screen.getByText(/1996-03-19/i)).toBeInTheDocument();
        expect(screen.getByText(/\(26 age\)/i)).toBeInTheDocument();
        expect(screen.getByText('164cm')).toBeInTheDocument()
        expect(screen.getByText('60kg')).toBeInTheDocument()
        expect(screen.getByText('middle')).toBeInTheDocument()
    })
})
