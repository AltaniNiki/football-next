This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ⚽ Football Info App

A simple Next.js + TypeScript application that allows users to explore football information including leagues, teams, players, and statistics.


## 📖 Overview

The app provides an intuitive interface for browsing football data. Users can:
	•	View all available leagues.
	•	Select a league to see more details:
	•	🏆 Standings
	•	🎯 Top scorers
	•	📅 Matches
	•	Choose a team to view:
	•	👥 Players
	•	📊 Team statistics
	•	Select a player to explore:
	•	🔄 Transfers history
	•	📈 Detailed statistics


## 🛠️ Tech Stack
	•	Frontend: Next.js (App Router), React, TypeScript
	•	UI Library: Material UI (MUI)
	•	State Management: Redux Toolkit
	•	HTTP Client: Factory api / Fetch API

## Backend Api

This project uses the API-Football service.
	•	Plan: Free subscription (limited to 100 requests per day)
	•	Due to this limitation, the app also uses static JSON mock data as a fallback model to avoid exceeding the daily quota.


## Getting Started 
	1.	Clone the repository:

    ```bash
    git clone https://github.com/AltaniNiki/football-next.git
    cd football-next
    ```

    2.	Install dependencies:

    ```bash
    npm install
    ```

	3.	Set up your API key from API-Football.

    ```bash
    APISPORTS_KEY=your_api_key
    ```

	4.	Run the development server:

    ```bash
        npm run dev
    ```
    
    5.	Open http://localhost:3000 in your browser.


 ## Notes 
 	•	This app is for educational/demo purposes.
	•	If you want to scale or use more requests, consider upgrading the API-Football plan.
	•	Static JSON data is used for testing to ensure the app works even when API quota is exceeded.