
## Project Setup

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/mjwideburg/engineer-test
    ```
2. Navigate to the project directory:
    ```sh
    cd engineer-test
    ```
3. Create a `.env` file in the root of the project and copy the contents of the provided `.env` file
    ```sh
    touch .env
    # Copy the contents of the .env file provided
    ```
4. Install the dependencies:
    ```sh
    npm install
    ```
5. Start the development server:
    ```sh
    npm start
    ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Tasks for the Interview Candidate

### 1. Photo of the Day

**File:** `src/components/photo-of-the-day/PhotoOfTheDay.tsx`

**Description:**
Retrieve and display NASA's Photo of the Day using the provided `getPhotoOfTheDay` API.

**Steps:**
1. Use the `getPhotoOfTheDay` function to fetch the photo data when the page loads.
2. Use the Material UI `Card` component to display the photo.
3. The card should include:
    - A title (`CardHeader`)
    - The photo (`CardMedia`)
    - A description (`CardContent`)

**Hints:**
- Refer to the Material UI Card component documentation: [Material UI Card](https://mui.com/material-ui/react-card/#media).

### 2. Find Closest Asteroid

**File:** `src/components/closest-asteroid/ClosestAsteroid.tsx`

**Description:**
Implement the logic to find the closest asteroid to Earth on a given date using NASA's Near Earth Object Web Service (NeoWs).

**Steps:**
1. Fetch asteroid data for the given date using the `getAsteroids` function.
2. Iterate through the list of asteroids and find the one with the minimum distance from Earth.
3. Update the state with the asteroid's name and its distance from Earth using `setAsteroid`.

**Hints:**
- Use `close_approach_data` and `miss_distance`
- Refer to the documentation: [NeoWs API Guide](https://proulxp.github.io/CS290-How-To-Guide/neo.html).

## How to Submit

1. Create a new branch for your work:
    ```sh
    git checkout -b your-branch-name
    ```
2. Commit your changes:
    ```sh
    git add .
    git commit -m "Implement task solutions"
    ```
3. Push your branch to the repository:
    ```sh
    git push origin your-branch-name
    ```
4. Create a Pull Request (PR) on GitHub:
    - Go to the repository on GitHub.
    - You should see a prompt to create a Pull Request for your recently pushed branch.
    - Follow the instructions to create the Pull Request.
    - Include information, feedback, anything you found relevent to your experience