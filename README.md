## Steps to run the Project

Make sure you have [Nodejs 10](https://nodejs.org/en/download/) and [Mongodb 4.2](https://docs.mongodb.com/manual/administration/install-community/) installed in your system.
  1. Navigate inside Autopilot-Scheduler-App directory.
  2. Install the required packages using the command `npm install`.
  3. Run the `index.js` file using `node index` command.
  The Scheduler App development server will start listening at `http://127.0.0.1:3000/`.
  4. Navigate inside Autopilot-Executor-App directory.
  5. Repeat the steps 2 and 3 for Autopilot-Executor-App directory
  The Scheduler App development server will start listening at `http://127.0.0.1:8000/`.
  6. Navigate Back to Root Directory.
  7. Change the Execution time in `script.sh` as per your requirement.
  8. Run the `script.sh` file using `./script.sh` command. 
  9. The Executor will make the API call at the given execution time.
